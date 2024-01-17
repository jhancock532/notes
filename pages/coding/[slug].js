import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import Link from 'next/link';
import path from 'path';
import dynamic from 'next/dynamic';
import CustomLink from '/components/CustomLink';
import CustomImage from '/components/CustomImage';
import Layout from '/components/Layout';
import Hero from '/components/Hero';
import rehypeHighlight from 'rehype-highlight';

const DemonstrationMap = dynamic(() => import('/components/DemonstrationMap'), {
  ssr: false,
});

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  img: CustomImage,
  Head,
  DemonstrationMap,
};

export default function PostPage({ source, frontMatter }) {
  return (
    <Layout>
      <Hero
        title={frontMatter.title}
        published={frontMatter.published}
        description={frontMatter.description}
      />
      <main>
        <MDXRemote {...source} components={components} />
      </main>
      <footer>
        <Link href="/coding">⛹️ Back to coding</Link>
      </footer>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const CODING_PATH = path.join(process.cwd(), 'writing/coding');

  const codingFilePath = path.join(CODING_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(codingFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypeHighlight],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  // N.B. I've moved the reference to `fs` out of the utils directory and into this page directly. This prevents random errors with Next.js trying to load fs on server vs client.
  const CODING_PATH = path.join(process.cwd(), 'writing/coding');

  const codingFilePaths = fs
    .readdirSync(CODING_PATH)
    .filter((path) => /\.mdx?$/.test(path));

  const paths = codingFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import Link from 'next/link';
import path from 'path';
import CustomLink from '/components/CustomLink';
import CustomImage from '/components/CustomImage';
import Layout from '/components/Layout';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  img: CustomImage,
  Head,
};

export default function PostPage({ source, frontMatter }) {
  return (
    <Layout>
      <div className="post-header">
        <h1>{frontMatter.title}</h1>
        <p className="published">{frontMatter.published}</p>
        {frontMatter.description && (
          <p className="description">
            <em>{frontMatter.description}</em>
          </p>
        )}
      </div>
      <main>
        <MDXRemote {...source} components={components} />
      </main>
      <footer>
        <Link href="/thoughts">⛷️ Back to thoughts</Link>
      </footer>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const THOUGHTS_PATH = path.join(process.cwd(), 'writing/thoughts');

  const thoughtsFilePath = path.join(THOUGHTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(thoughtsFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
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
  const THOUGHTS_PATH = path.join(process.cwd(), 'writing/thoughts');

  const thoughtsFilePaths = fs
    .readdirSync(THOUGHTS_PATH)
    .filter((path) => /\.mdx?$/.test(path));

  const paths = thoughtsFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
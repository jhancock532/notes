import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';
import Layout from '/components/Layout';
import PostListing from '/components/PostListing';

export default function Coding({ posts }) {
  return (
    <Layout>
      <h1>Coding</h1>
      <p>Tutorials for web development.</p>

      <PostListing posts={posts} type="coding" />

      <Link href="/">🏄 Go back home</Link>
    </Layout>
  );
}

export function getStaticProps() {
  const CODING_PATH = path.join(process.cwd(), 'writing/coding');

  const CodingFilePaths = fs
    .readdirSync(CODING_PATH)
    .filter((path) => /\.mdx?$/.test(path));

  const posts = CodingFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(CODING_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}

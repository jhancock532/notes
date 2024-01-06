import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';
import Layout from '/components/Layout';
import PostListing from '/components/PostListing';

export default function Thoughts({ posts }) {
  return (
    <Layout>
      <h1>Thoughts</h1>
      <p>Some short blog posts about tech, art and literature.</p>

      <PostListing posts={posts} type="thoughts" />

      <Link href="/">🏄 Go back home</Link>
    </Layout>
  );
}

export function getStaticProps() {
  const THOUGHTS_PATH = path.join(process.cwd(), 'writing/thoughts');

  const thoughtsFilePaths = fs
    .readdirSync(THOUGHTS_PATH)
    .filter((path) => /\.mdx?$/.test(path));

  const posts = thoughtsFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(THOUGHTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}

import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';
import Layout from '/components/Layout';
import { postFilePaths, POSTS_PATH } from '/utils/mdxUtils';

export default function Posts({ posts }) {
  return (
    <Layout>
      <h1>Notes</h1>
      <p>Some short blog posts about tech, art and literature.</p>
      <p>Hello traveler. All the posts are indexed on the homepage.</p>
      <Link href="/">Go back home 🚀</Link>
    </Layout>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}

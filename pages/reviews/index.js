import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';
import Layout from '/components/Layout';
import Hero from '/components/Hero';
import PostListing from '/components/PostListing';

export default function Reviews({ posts }) {
  return (
    <Layout>
      <Hero title="Reviews" description="Art exhibitions, etc." />

      <PostListing posts={posts} type="reviews" />

      <Link href="/">Go back home</Link>
    </Layout>
  );
}

export function getStaticProps() {
  const CODING_PATH = path.join(process.cwd(), 'writing/reviews');

  const ReviewsFilePaths = fs
    .readdirSync(CODING_PATH)
    .filter((path) => /\.mdx?$/.test(path));

  const posts = ReviewsFilePaths.map((filePath) => {
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

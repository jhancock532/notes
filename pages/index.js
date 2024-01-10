// import fs from 'fs';
// import matter from 'gray-matter';
// import path from 'path';
import Layout from '/components/Layout';
import Link from 'next/link';

export default function Index() {
  return (
    <Layout>
      <h1>Notes</h1>
      <p>Some short blog posts about tech, art and literature.</p>
      <p>
        View all <Link href="/thoughts">thoughts</Link>, or check out the{' '}
        <Link href="/coding">coding</Link> blog posts.
      </p>
    </Layout>
  );
}

// export function getStaticProps() {
//   // const posts = postFilePaths.map((filePath) => {
//   //   const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
//   //   const { content, data } = matter(source);

//   //   return {
//   //     content,
//   //     data,
//   //     filePath,
//   //   };
//   // });

//   return { props: { posts } };
// }

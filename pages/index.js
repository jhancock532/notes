import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import Layout from '/components/Layout';
import { postFilePaths, POSTS_PATH } from '/utils/mdxUtils';
import PostCard from '../components/PostCard/PostCard';

export default function Index({ posts }) {
  return (
    <Layout>
      <h1>Notes</h1>
      <p>Some short blog posts about tech, art and literature.</p>
      <div style={{ marginTop: '50px' }}>
        {posts.map((post) => (
          <PostCard key={post.filePath} post={post} />
        ))}
      </div>
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

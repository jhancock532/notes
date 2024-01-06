import PostCard from '/components/PostCard';

import styles from './PostListing.module.scss';

function sortPostsByDate(posts) {
  return posts.sort((a, b) => {
    return new Date(b.data.published) - new Date(a.data.published);
  });
}

export default function PostListing({ posts, type }) {
  return (
    <div className={styles.container}>
      {sortPostsByDate(posts).map((post) => (
        <PostCard key={post.filePath} post={post} type={type} />
      ))}
    </div>
  );
}

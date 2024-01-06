import Link from 'next/link';

import styles from './PostCard.module.scss';

export default function PostCard({ post, type }) {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <Link
          as={`/${type}/${post.filePath.replace(/\.mdx?$/, '')}`}
          href={`/${type}/[slug]`}
          className={styles.title}
        >
          {post.data.title}
        </Link>
        <p className={styles.metadata}>{post.data.published}</p>
      </div>
      <p className={styles.description}>
        {post.data.description} {post.data.duration}.
      </p>
    </div>
  );
}

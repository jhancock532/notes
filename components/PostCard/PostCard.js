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
        <p className={styles.published}>{post.data.published}</p>
      </div>
      <p className={styles.description}>{post.data.description}</p>
      <div className={styles.metadata}>
        {post.data.tags && (
          <div className={styles.tagContainer}>
            Tags:
            {post.data.tags.sort().map((tag, index) => (
              <span className={styles.tag} key={index}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {post.data.duration && (
          <span className={styles.duration}>{post.data.duration}</span>
        )}
      </div>
    </div>
  );
}

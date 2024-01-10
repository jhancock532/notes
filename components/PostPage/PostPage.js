import React from 'react';
import Link from 'next/link';
import Layout from '/components/Layout';

import styles from './PostPage.module.scss';

// Doesn't work with MDXRemote.

export default function PostPage({ frontMatter, type, children }) {
  return (
    <Layout>
      <div className={styles.header}>
        <h1>{frontMatter.title}</h1>
        <p className={styles.published}>{frontMatter.published}</p>
        {frontMatter.description && (
          <p className={styles.description}>
            <em>{frontMatter.description}</em>
          </p>
        )}
      </div>
      <main>{children}</main>
      <footer>
        <Link href={`/${type}`}>⛷️ Back to {type}</Link>
      </footer>
    </Layout>
  );
}

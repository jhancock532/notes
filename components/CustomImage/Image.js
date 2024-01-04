'use client';

import styles from './Image.module.scss';

export default function CustomImage({ alt, src }) {
  return <img src={`/notes/${src}`} alt={alt} loading="lazy"></img>;
}

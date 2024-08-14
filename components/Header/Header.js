import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link href="/" className={styles.homeLink}>
              <strong>Notes</strong>
            </Link>
          </li>
          <li>
            <p>—</p>
          </li>
          <li>
            <Link href="/coding">Coding</Link>
          </li>
          <li>
            <Link href="/thoughts">Thoughts</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

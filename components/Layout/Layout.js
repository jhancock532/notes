import styles from './Layout.module.scss';

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.wrapper}>{children}</div>
    </>
  );
}

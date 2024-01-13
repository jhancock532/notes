import Header from '/components/Header';
import styles from './Layout.module.scss';

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        {children}
      </div>
    </>
  );
}

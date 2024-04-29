import styles from '@/styles/Layout.module.css';
import Bovenkader from '../achtergrond/bovenkader.svg';
import Scherm from '../achtergrond/scherm.svg';
import SearchBar from '../components/searchbar';

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.header}>
          <Bovenkader width="100%" />
        </div>
        <div className={styles.searchbar}>
          <SearchBar />
        </div>
        <div className={styles.scherm}>
          <Scherm width="100%" />
          <main className={styles.children}>{children}</main>
        </div>
      </div>
    </>
  );
}

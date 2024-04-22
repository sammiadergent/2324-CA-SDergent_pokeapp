import Link from 'next/link';
import styles from '@/styles/Layout.module.css';
import Bovenkader from '../achtergrond/bovenkader.svg';

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.header}>
        <Bovenkader width="50%" />
      </div>
      <nav>
        <Link href="/">Home</Link>
      </nav>
      <main>{children}</main>
    </>
  );
}

import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
      </nav>
      <main>{children}</main>
    </>
  );
}

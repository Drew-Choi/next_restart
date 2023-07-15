import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Drew Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav style={{ backgroundColor: 'beige' }}>
        <Link style={{ marginRight: '20px' }} href={'/csr'}>
          CSR
        </Link>
        <Link href={'/ssg'}>SSG</Link>
      </nav>

      <main>{children}</main>
    </div>
  );
};

export default Layout;

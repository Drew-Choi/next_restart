import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';
import layoutScss from './page.module.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={layoutScss.navbar}>
          <Link href="/">홈</Link>
          <Link href="/list">List</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
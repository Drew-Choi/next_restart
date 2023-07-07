import Link from 'next/link';
import homeScss from './page.module.scss';

export default function Home() {
  return (
    <main>
      <div className={homeScss.navbar}>
        <Link href="/">홈</Link>
        <Link href="/list">List</Link>
      </div>
      <h4 className={homeScss.title}>NEXT WORLD</h4>
    </main>
  );
}

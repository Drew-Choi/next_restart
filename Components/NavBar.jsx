import Link from 'next/link';
import { useRouter } from 'next/navigation';

const NavBar = () => {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
};

export default NavBar;

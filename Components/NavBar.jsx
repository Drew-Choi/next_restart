import Link from 'next/link';

export async function getServerSideProps() {
  console.log('server');

  return {
    props: { time: new Date().toISOString() },
  };
}

const NavBar = ({ time }) => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <span style={{ color: 'black' }}>시간: {time}</span>
    </nav>
  );
};

export default NavBar;

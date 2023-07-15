import Link from 'next/link';

const ssg = () => {
  return (
    <>
      <h1>SSG</h1>
      <Link href={'/'}>HOME</Link>
    </>
  );
};

export default ssg;

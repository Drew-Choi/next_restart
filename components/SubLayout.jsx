import Link from 'next/link';

const SubLayout = ({ children }) => {
  return (
    <div>
      <Link href="/">Home으로</Link>
      {children}
    </div>
  );
};

export default SubLayout;

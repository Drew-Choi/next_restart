/* eslint-disable react-hooks/rules-of-hooks */
import Link from 'next/link';
import { useEffect, useState } from 'react';

const csr = () => {
  const [time, setTime] = useState();

  useEffect(() => {
    console.log('client');
    setTime((cur) => new Date().toISOString());
  }, []);
  return (
    <>
      <h1>CSR</h1>
      <div>클라이언트사이드시간: {time}</div>
      <Link href={'/'}>HOME</Link>
    </>
  );
};

export default csr;

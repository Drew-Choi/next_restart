/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout';
import SubLayout from '@/components/SubLayout';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const CSR = () => {
  const [time, setTime] = useState();

  useEffect(() => {
    console.log('client');
    setTime((cur) => new Date().toISOString());
  }, []);

  return (
    <div>
      <h1>CSR</h1>
      <div>클라이언트사이드시간: {time}</div>
    </div>
  );
};

export default CSR;

CSR.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};

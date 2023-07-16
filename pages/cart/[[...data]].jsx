import Layout from '@/components/Layout';
import SubLayout from '@/components/SubLayout';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Data = () => {
  const router = useRouter();
  const { data } = router.query;

  return (
    <div>
      <h1>Data</h1>
      <h4>{JSON.stringify(data)}</h4>
      <Link href="/cart/2023/07/16">날짜로 보내기</Link>

      <br />

      <button onClick={() => router.push('/cart/2023/08/01')}>
        2023년 8월 11일 가기
      </button>
    </div>
  );
};

export default Data;

Data.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};

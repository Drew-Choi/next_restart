import Layout from '@/components/Layout';
import SubLayout from '@/components/SubLayout';

const Data = () => {
  return (
    <div>
      <h1>Data</h1>
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

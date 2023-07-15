import Layout from '@/components/Layout';
import SubLayout from '@/components/SubLayout';

const SSG = () => {
  return (
    <div>
      <h1>SSG</h1>
    </div>
  );
};

export default SSG;

SSG.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};

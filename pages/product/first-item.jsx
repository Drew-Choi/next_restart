import Layout from '@/components/Layout';
import SubLayout from '@/components/SubLayout';

const FirstItem = () => {
  return (
    <>
      <h1>FirstItem</h1>
    </>
  );
};

export default FirstItem;

FirstItem.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};

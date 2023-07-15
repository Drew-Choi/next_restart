import Layout from '@/components/Layout';
import SubLayout from '@/components/SubLayout';

const CategorySlug = () => {
  return (
    <div>
      <h1>Categoey</h1>
    </div>
  );
};

export default CategorySlug;

CategorySlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};

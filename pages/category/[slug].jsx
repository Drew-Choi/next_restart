import Layout from '@/components/Layout';
import SubLayout from '@/components/SubLayout';
import { useRouter } from 'next/router';

const CategorySlug = () => {
  const router = useRouter();
  const { slug, event, name } = router.query;

  return (
    <div>
      <h1>
        Categoey {event} {name}
      </h1>
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

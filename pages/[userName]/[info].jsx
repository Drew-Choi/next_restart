import Layout from '@/components/Layout';
import SubLayout from '@/components/SubLayout';
import { useRouter } from 'next/router';

const UserNameInfo = () => {
  const router = useRouter();
  const { userName, info } = router.query;

  return (
    <div>
      <h1>
        {userName}&apos;s {info}
      </h1>
    </div>
  );
};

export default UserNameInfo;

UserNameInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};

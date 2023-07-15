import Layout from '@/components/Layout';
import SubLayout from '@/components/SubLayout';

const UserNameInfo = () => {
  return (
    <div>
      <h1>UserNameInfo</h1>
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

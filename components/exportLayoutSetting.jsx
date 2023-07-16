const { default: Layout } = require('./Layout');
const { default: SubLayout } = require('./SubLayout');

const layoutSetting = (name) => {
  name.getLayout = function getLayout(page) {
    return (
      <Layout>
        <SubLayout>{page}</SubLayout>
      </Layout>
    );
  };
};

export default layoutSetting;

import Layout from '@/components/Layout';

const App = ({ Component, pageProps }) => {
  // return (
  //   <Layout>
  //     <Component {...pageProps} />
  //   </Layout>
  // );

  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return getLayout(<Component {...pageProps} />);
};

export default App;

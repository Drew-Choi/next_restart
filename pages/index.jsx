export async function getServerSideProps() {
  console.log('server');

  return {
    props: { time: new Date().toISOString() },
  };
}

const index = ({ time }) => {
  return (
    <>
      <div>HOME</div>
      <div>{time}</div>
    </>
  );
};

export default index;

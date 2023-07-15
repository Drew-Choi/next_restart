export async function getServerSideProps() {
  console.log('server');

  return {
    props: {
      time: new Date().toISOString(),
    },
  };
}

export default function index({ time }) {
  return (
    <>
      <h1>HOME</h1>
      <div>
        <div>시간: {time}</div>
      </div>
    </>
  );
}

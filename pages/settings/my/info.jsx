import layoutSetting from '@/components/exportLayoutSetting';
import { useRouter } from 'next/router';
import { useState } from 'react';

// shallow 연습, 데이터패칭 요청 없이 쿼리만 바꾸고 싶을 때 사용

export async function getServerSideProps() {
  console.log('info의 서버사이드');

  return {
    props: {},
  };
}

const SettingsMyInfo = () => {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const { status = 'initial' } = router.query;

  return (
    <div>
      <h1>my info</h1>
      <h3>Clicked: {String(clicked)}</h3>
      <h3>Status: {status}</h3>
      <button
        onClick={() => {
          alert('edit');
          setClicked(true);
          location.replace('/settings/my/info?status=editing');
        }}
      >
        edit(replace)
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          alert('edit');
          setClicked(true);
          router.push('/settings/my/info?status=editing');
        }}
      >
        edit(push)
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          alert('edit');
          setClicked(true);
          router.push('/settings/my/info?status=editing', undefined, {
            shallow: true,
          });
        }}
      >
        edit(shallow)
      </button>
      <button
        onClick={() => {
          alert('edit');
          setClicked(true);
          router.push('/settings/my/info?status=TEST', undefined, {
            shallow: true,
          });
        }}
      >
        edit(shallow)22
      </button>
    </div>
  );
};

export default SettingsMyInfo;

layoutSetting(SettingsMyInfo);

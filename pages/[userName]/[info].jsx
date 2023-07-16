import Layout from '@/components/Layout';
import SubLayout from '@/components/SubLayout';
import layoutSetting from '@/components/exportLayoutSetting';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const UserNameInfo = () => {
  const router = useRouter();
  const { userName, info, uid } = router.query;
  const [name, setName] = useState('?');

  // useEffect(() => {
  //   fetch('/api/user')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setName(data.name);
  //     });
  // }, []);

  useEffect(() => {
    if (uid !== null) {
      fetch(`/api/user-info/${uid}`)
        .then((res) => res.json())
        .then((data) => {
          setName(data.name);
        });
    }
  }, [uid]);

  return (
    <div>
      <h1>
        {userName}&apos;s {info}
      </h1>
      <br />
      <h1>Name: {name}</h1>
    </div>
  );
};

export default UserNameInfo;

layoutSetting(UserNameInfo);

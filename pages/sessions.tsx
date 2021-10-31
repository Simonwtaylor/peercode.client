import React, { useContext } from 'react';
import { SessionsListContainer, Layout } from '../components/';
import { NavContext } from '../lib';

const SessionsPage: React.FC = () => {
  const { userId } = useContext(NavContext);

  return (
    <Layout>
      <div className={'w-full items-center content-center justify-items-center place-items-center m-2 p-2 grid'}>
        <div className={'grid grid-cols-2 gap-6 w-full'}>
          <SessionsListContainer clickable={true} userId={userId} />
        </div>
      </div>
    </Layout>
  );
};

export default SessionsPage;

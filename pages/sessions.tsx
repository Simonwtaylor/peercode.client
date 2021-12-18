import React, { useContext } from 'react';
import { SessionsListContainer, Layout } from '../components/';
import { UserContext } from '../lib';

const SessionsPage: React.FC = () => {
  const { user } = useContext(UserContext);

  return (
    <Layout>
      <div className={'w-full items-center content-center justify-items-center place-items-center m-2 p-2 grid'}>
        <div className={'grid grid-cols-2 gap-6 w-full'}>
          <SessionsListContainer clickable={true} userId={user.id} />
        </div>
      </div>
    </Layout>
  );
};

export default SessionsPage;

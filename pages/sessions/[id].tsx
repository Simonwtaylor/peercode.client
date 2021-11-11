import { useRouter } from 'next/router';
import React from 'react';
import { Layout, SessionDetailContainer, SessionSummaryCardContainer } from '../../components';

const SessionPage: React.FC = () => {
  const router = useRouter();
  const id = +(router.query?.id as string ?? '') ?? 0;

  return (
    <Layout>
      <div className={'w-full items-center content-center justify-items-center place-items-center m-2 p-2 grid'}>
        <div className={'w-2/3'}>
          <SessionSummaryCardContainer sessionId={id} clickable={false} />
        </div>
        <SessionDetailContainer sessionId={id} />
      </div>
    </Layout>
  );
};

export default SessionPage;
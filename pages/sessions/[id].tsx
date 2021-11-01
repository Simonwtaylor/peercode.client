import { useRouter } from 'next/router';
import React from 'react';
import { VscAdd } from 'react-icons/vsc';
import { Layout, SessionSummaryCardContainer } from '../../components';

const SessionPage: React.FC = () => {
  const router = useRouter();
  const id = +(router.query?.id as string ?? '') ?? 0;

  return (
    <Layout>
      <div className={'w-full items-center content-center justify-items-center place-items-center m-2 p-2 grid'}>
        <div className={'w-2/3'}>
          <SessionSummaryCardContainer sessionId={id} clickable={false} />
        </div>
        <div className={'flex w-2/3 my-4 rounded overflow-hidden shadow-lg text-white card-dark-lighter-background'}>
          <div className={'flex-auto p-4'}>
            <div className={'my-1'}>
              <div className={'text-xl font-bold my-2'}>
                Sessions

                <VscAdd className={'inline float-right cursor-pointer'} onClick={() => console.log('add')} />
              </div>
              <div className={'text-base'}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SessionPage;
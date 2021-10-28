import { useRouter } from 'next/router';
import React from 'react';
import {
  BioCardContainer,
  ProfileCardContainer,
  SkillsSection,
  Layout,
} from '../../components/';

const UserPage: React.FC = () => {
  const router = useRouter();
  const id = +(router.query?.id as string ?? '') ?? 0;

  return (
    <Layout>
      <div className={'w-full items-center content-center justify-items-center place-items-center m-2 p-2 grid'}>
        <ProfileCardContainer userId={id} editable={false} />
        <SkillsSection userId={id} editable={false} />
        <BioCardContainer userId={id} editable={false} />
        <div className={'flex w-2/3 my-4 rounded overflow-hidden shadow-lg text-white card-dark-lighter-background'}>
          <div className={'flex-auto p-4'}>
            <div className={'my-1'}>
              <div className={'text-xl font-bold my-2'}>
                Reviews  
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
 
export default UserPage;

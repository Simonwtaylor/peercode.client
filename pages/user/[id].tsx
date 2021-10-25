import { useRouter } from 'next/router';
import React from 'react';
import { BioCardContainer } from '../../components/cards';
import ProfileCardContainer from '../../components/cards/profile-card.container';
import SkillsSection from '../../components/cards/skills/skills-section.component';
import Layout from '../../components/hoc/with-layout.component';

export interface IUserPageProps {

}

const UserPage: React.FC<IUserPageProps> = () => {
  const router = useRouter();

  return (
    <Layout>
      <div className={'w-full items-center content-center justify-items-center place-items-center m-2 p-2 grid'}>
        <ProfileCardContainer id={+(router.query?.id as string ?? '') ?? 0} editable={false} />
        <SkillsSection userId={+(router.query?.id as string ?? '') ?? 0} editable={false} />
        <BioCardContainer id={+(router.query?.id as string ?? '') ?? 0} editable={false} />
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

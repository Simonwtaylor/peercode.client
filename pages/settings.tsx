import React, { useContext } from 'react';
import { BioCardContainer } from '../components/cards';
import ProfileCardContainer from '../components/cards/profile-card.container';
import SkillsSection from '../components/cards/skills/skills-section.component';
import Layout from '../components/hoc/with-layout.component';
import { NavContext } from '../lib';

export interface ISettingsPageProps {

}

const SettingsPage: React.FC<ISettingsPageProps> = () => {
  const { userId } = useContext(NavContext);

  return (
    <Layout>
      <div className={'w-full items-center content-center justify-items-center place-items-center m-2 p-2 grid'}>
        <ProfileCardContainer id={userId} editable={true} />
        <SkillsSection userId={userId} editable={true} />
        <BioCardContainer id={userId} editable={true} />
        <div className={'flex w-2/3 my-4 rounded overflow-hidden shadow-lg text-white card-dark-lighter-background'}>
          <div className={'flex-auto p-6'}>
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

export default SettingsPage;

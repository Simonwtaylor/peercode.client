import React, { useState } from 'react';
import { VscCircleSlash, VscEdit } from 'react-icons/vsc';
import AddSkillCardContainer from './add-skill-card.container';
import SkillsCardContainer from './skills-card.container';
 
export interface ISkillsSectionProps {
  editable: boolean;
  userId: number;
}
 
const SkillsSection: React.FC<ISkillsSectionProps> = ({
  editable,
  userId,
}) => {
  const [mode, setMode] = useState<'view'|'edit'>('view');

  const getIcon = () => {
    if (!editable) {
      return <></>;
    }

    if (mode === 'view') {
      return <VscEdit className={'inline float-right cursor-pointer'} onClick={() => setMode('edit')} />;
    }

    return <VscCircleSlash className={'inline float-right cursor-pointer'} onClick={() => setMode('view')} />;
  }

  return (
    <div className={'flex w-2/3 my-4 rounded overflow-hidden shadow-lg text-white card-dark-lighter-background'}>
      <div className={'flex-auto p-4'}>
        <div className={'my-1'}>
          <div className={'text-xl font-bold my-2'}>
            Skills
            {getIcon()}
          </div>
          <div className={'text-base'}>
            <SkillsCardContainer userId={userId} editable={editable} />
          </div>
          {(mode === 'edit' && 
            <div>
              <AddSkillCardContainer
                userId={userId}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
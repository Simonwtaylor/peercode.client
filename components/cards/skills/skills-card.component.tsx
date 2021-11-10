import React from 'react';
import { VscClose } from 'react-icons/vsc';
import { ISkill } from '../../../lib';

export interface ISkillCardsProps {
  skills: ISkill[];
  removable?: boolean;
  onSkillRemove?: (skillId: number) => void;
}

const SkillCards: React.FC<ISkillCardsProps> = ({
  skills,
  removable,
  onSkillRemove,
}) => {
  const mapSkills = () => {
    return skills.map(({ id, name }) => 
      <div
        key={`skillscard${id}`}
        className={'tracking-wider text-white bg-blue-700 px-2 text-sm rounded leading-loose font-semibold'}
        onClick={() => onSkillRemove && onSkillRemove(id)}
      >
        {name}
        {removable && <VscClose className={'float-right mt-2'}  />}
      </div>
    );
  };

  return (
    <div className={'grid grid-cols-4 gap-2'}>{mapSkills()}</div>
  );
};

export default SkillCards;
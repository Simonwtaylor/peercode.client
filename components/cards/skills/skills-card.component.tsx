import React from 'react';
import { ISkill } from '../../../lib';

export interface ISkillCardsProps {
  skills: ISkill[];
}

const SkillCards: React.FC<ISkillCardsProps> = ({
  skills,
}) => {

  const getYearsText = (years: number) => {
    if (years === 1) {
      return `${years} yr`;
    }

    return `${years} yrs`;
  };

  const mapSkills = () => {
    return skills.map(({ id, colour, name }) => 
      <div
        key={`skillscard${id}`}
        className={`tracking-wider text-white bg-${colour}-700 px-2 text-sm rounded leading-loose font-semibold`}
      >
        {name}
      </div>
    );
  };

  return (
    <div className={'grid grid-cols-4 gap-2'}>{mapSkills()}</div>
  );
};
 
export default SkillCards;
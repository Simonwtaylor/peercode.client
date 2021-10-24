import React from 'react'
import { IUserSkill } from '../../../lib';
 
export interface ISkillCardsProps {
  skills: IUserSkill[];
}
 
const SkillCards: React.FC<ISkillCardsProps> = ({
  skills,
}) => {

  const mapSkills = () => {
    return skills.map((skill) => 
      <div
        className={`tracking-wider text-white bg-${skill.skill.colour}-700 px-2 text-sm rounded leading-loose font-semibold`}
      >
        {skill.skill.name} - {skill.yearsExperience} yrs
      </div>
    );
  };

  return (
    <div className={'grid grid-cols-4'}>{mapSkills()}</div>
  );
};
 
export default SkillCards;
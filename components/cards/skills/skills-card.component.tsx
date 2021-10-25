import React from 'react'
import { VscClose } from 'react-icons/vsc';
import { IUserSkill } from '../../../lib';
 
export interface ISkillCardsProps {
  skills: IUserSkill[];
  editable?: boolean;
  onUserSkillRemove: (userSkillId: number) => void;
}
 
const SkillCards: React.FC<ISkillCardsProps> = ({
  skills,
  editable,
  onUserSkillRemove,
}) => {

  const getYearsText = (years: number) => {
    if (years === 1) {
      return `${years} yr`;
    }

    return `${years} yrs`;
  };

  const mapSkills = () => {
    return skills.map(({ id, skill, yearsExperience }) => 
      <div
        className={`tracking-wider text-white bg-${skill.colour}-700 px-2 text-sm rounded leading-loose font-semibold`}
      >
        {skill.name} - {getYearsText(yearsExperience)}
        {editable && <VscClose className={'float-right mt-2'} onClick={() => onUserSkillRemove(id)} />}
      </div>
    );
  };

  return (
    <div className={'grid grid-cols-4 gap-2'}>{mapSkills()}</div>
  );
};
 
export default SkillCards;
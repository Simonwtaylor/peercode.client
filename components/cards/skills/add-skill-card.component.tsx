import React, { useState } from 'react';
import { VscSave } from 'react-icons/vsc';
import Button from '../../buttons/button.component';
import { UserSkillsDropdown } from '../../dropdowns';
import { TextInput } from '../../inputs';
 
export interface IAddSkillCardProps {
  userId: number;
  onAddSkill: (skillData: any) => void;
}
 
const AddSkillCard: React.FC<IAddSkillCardProps> = ({
  userId,
  onAddSkill,
}) => {
  const [skill, setSkill] = useState<number|undefined>();
  const [yearsExp, setYearsExp] = useState<number|undefined>();

  return (
    <>
      <div className={'text-lg w-full font-bold my-3 block'}>
        Add a new Skill
      </div>
      <div className={'grid grid-cols-3 gap-5 my-4'}>
        <UserSkillsDropdown
          userId={userId}
          onSelectSkill={(id: number) => {
            setSkill(id);
          }}
          selectedItem={skill}
        />
        <TextInput
          onChange={(newYearsExp: string) => setYearsExp(+newYearsExp)}
          type={'number'}
          value={`${yearsExp}`}
        />
        <Button
          icon={<VscSave className={'text-white mx-1 inline'} />}
          text={'Save'} colour={'green'}
          onClick={() => {
            onAddSkill({ skillId: skill, yearsExperience: yearsExp });
            setSkill(undefined);
            setYearsExp(undefined);
          }}
        />
      </div>
    </>
  );
};
 
export default AddSkillCard;
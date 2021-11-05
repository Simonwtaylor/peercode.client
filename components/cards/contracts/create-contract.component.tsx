import React, { useEffect, useState } from 'react';
import { VscAdd, VscSave } from 'react-icons/vsc';
import { SkillsCard } from '..';
import { DatePickerInput, SkillsDropdown, TextInput } from '../..';
import { ICreateContract, ISkill } from '../../../lib';
 
export interface ICreateContractProps {
  onContractCreate: (contract: ICreateContract) => void;
}
 
const CreateContract: React.FC<ICreateContractProps> = ({
  onContractCreate,
}) => {
  const [refresh, setRefresh] = useState(false);
  const [skills, setSkills] = useState<ISkill[]>([]);
  const [startDate, setStartDate] = useState<Date|undefined>(undefined);
  const [endDate, setEndDate] = useState<Date|undefined>(undefined);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {

  }, [refresh])

  return (
    <>
      <div className={'flex flex-col border-solid border-2 border-transparent w-full my-4 rounded overflow-hidden shadow-lg text-white card-dark-lighter-background cursor-pointer hover:shadow-2xl hover:border-blue-900'}>
        <div className={'text-xl font-bold my-2 p-4'}>
          New Contract

          <VscSave
            className={'inline float-right cursor-pointer'}
            onClick={() => onContractCreate({
              startDate,
              endDate,
              name,
              description,
              statusId: 1,
              skills: skills.map((a) => a.id),
              userContracts: [],
            })}
          />
        </div>
        <div className={'grid grid-cols-2 p-4 my-1'}>
          <div className={'my-1'}>
            <TextInput onChange={setName} value={name} label={'Name'} />
          </div>
          <div className={'my-1'}>
            <TextInput onChange={setDescription} value={description} label={'Description'} />
          </div>
          <div className={'my-1'}>
            <DatePickerInput date={startDate} onDatePickerChange={setStartDate} label={'Start Date'} />
          </div>
          <div className={'my-1'}>
            <DatePickerInput startDate={startDate} date={endDate} onDatePickerChange={setEndDate} label={'End Date'}  />
          </div>         
        </div>
        <div className={'p-4 mb-2'}>
         <span className={'w-full block'}>Skills</span>
          <div className={'my-2'}>
            <SkillsDropdown
              onSelectSkill={(skill?: ISkill) => {
                if (skill && !skills.find(a => a.id === skill?.id)) {
                  const newSkills = skills;
                  newSkills.push(skill);
                  setSkills(newSkills);
                  setRefresh(!refresh);
                }
              }}
            />
          </div>      
          <SkillsCard skills={skills} />
        </div>
        <div className={'bg-blue-500 w-full flex p-2 flex-row text-xl'}>
          <div className={'flex w-full'}>
            <VscAdd className={'m-1'} />
             
          </div>
        </div>
      </div>
     
    </>
  );
};
 
export default CreateContract;
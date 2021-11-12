import React, { useState } from 'react';
import { VscCircleSlash, VscSave } from 'react-icons/vsc';
import { DatePickerInput, TextInput } from '../..';
 
export interface ISessionAddProps {
  onSessionAdd: (newSession: any) => void;
  onCancelSessionAdd: () => void;
}
 
const SessionAdd: React.FC<ISessionAddProps> = ({
  onSessionAdd,
  onCancelSessionAdd,
}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState<Date|undefined>(undefined);
  const [endDate, setEndDate] = useState<Date|undefined>(undefined);

  return (
    <>
      <div className={'flex flex-col border-solid border-2 border-transparent w-full my-4 rounded overflow-hidden shadow-lg text-white card-dark-lighter-background'}>
        <div className={'text-xl font-bold my-2 p-4'}>
          New Session

          <VscCircleSlash
            className={'inline float-right cursor-pointer'}
            onClick={() => onCancelSessionAdd()}
          />
          <VscSave
            className={'inline float-right cursor-pointer mr-2'}
            onClick={() => onSessionAdd({
              startDate,
              endDate,
              name,
              description,
              statusId: 1,
            })}
          />
          
        </div>
        <div className={'grid grid-cols-2 p-4 my-1'}>
          <div className={'w-11/12 my-2'}>
            <TextInput onChange={setName} value={name} label={'Name'} />
          </div>
          <div className={'w-11/12 my-2'}>
            <TextInput onChange={setDescription} value={description} label={'Description'} />
          </div>
          <div className={'w-11/12 my-2'}>
            <DatePickerInput date={startDate} onDatePickerChange={setStartDate} label={'Start Date'} />
          </div>
          <div className={'w-11/12 my-2'}>
            <DatePickerInput startDate={startDate} date={endDate} onDatePickerChange={setEndDate} label={'End Date'}  />
          </div>         
        </div>
      </div>
    </>
  );
};
 
export default SessionAdd;
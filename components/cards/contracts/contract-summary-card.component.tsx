import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { VscBellDot, VscCircleSlash, VscEdit, VscFlame, VscRocket, VscSave, VscSymbolEvent } from 'react-icons/vsc';
import { SkillsCard } from '..';
import { IContract, RouterEnums } from '../../../lib';
import { DatePickerInput, TextInput } from '../../inputs';
 
export interface IContractSummaryCardProps {
  contract: IContract;
  clickable: boolean;
}
 
const ContractSummaryCard: React.FC<IContractSummaryCardProps> = ({
  contract,
  clickable,
}) => {
  const [mode, setMode] = useState<'view'|'edit'>('view');

  const router = useRouter();

  const { startDate, endDate, name, status, id, description, numberOfSessions, sessionPrice, skills } = contract;

  const [editStartDate, setEditStartDate] = useState(startDate);
  const [editEndDate, setEditEndDate] = useState(endDate);
  const [editName, setEditName] = useState(name);
  const [editDescription, setEditDescription] = useState(description);

  useEffect(() => {

  }, [editStartDate]);

  const getDateRange = () => {
    let res = '';
    if (startDate) {
      res += `${startDate}`;
    }

    if (endDate) {
      res += ` -> ${endDate}`;
    }

    return res;
  };

  const getContractStatusBar = (status: string, dateRange: string) => {
    if (status === 'Proposal') {
      return (
        <div className={'bg-purple-500 w-full flex p-4 flex-row text-xl'}>
          <div className={'flex w-1/2'}>
            <VscFlame className={'text-white text-lg mr-2 mt-1'} /> Proposal
          </div>
          <div className={'flex w-1/2 mt-1 flex-row-reverse text-sm'}>
            {dateRange}
          </div>
        </div>
      );
    }

    if (status === 'active') {
      return (
        <div className={'bg-blue-500 w-full flex p-4 flex-row text-xl'}>
          <div className={'flex w-1/2'}>
            <VscSymbolEvent className={'text-white text-lg mr-2 mt-1'} /> Active
          </div>
          <div className={'flex w-1/2 mt-1 flex-row-reverse text-sm'}>
            {dateRange}
          </div>
        </div>
      );
    }

    if (status === 'completed') {
      return (
        <div className={'bg-green-500 w-full flex p-4 flex-row text-xl'}>
          <div className={'flex w-1/2'}>
            <VscRocket className={'text-white text-lg mr-2 mt-1'} /> Completed
          </div>
          <div className={'flex w-1/2 mt-1 flex-row-reverse text-sm'}>
            {dateRange}
          </div>
        </div>
      );
    }
  };

  const getEditButton = () => {
    if (mode === 'view' && status.status === 'Proposal') {
      return (
        <>
          <span className={'float-right mx-1'}><VscBellDot /></span>
          <span className={'float-right mx-1'}><VscEdit onClick={() => setMode('edit')} /></span>
        </>
      );
    }

    if (mode === 'edit' && status.status === 'Proposal') {
      return (
        <>
          <span className={'float-right mx-1'}><VscCircleSlash onClick={() => setMode('view')} /></span>
          <span className={'float-right mx-1'}><VscSave onClick={() => setMode('view')} /></span>
        </>
      )
    }
  };

  const handleStartDateChange = (newDate: Date) => {
    
    if (dayjs(newDate).isAfter(editEndDate)) {
      console.log("AFTER")
      setEditEndDate(newDate);
    }
    setEditStartDate(newDate);
  };

  const getCardContent = () => {
    if (mode === 'view') {
      return (
        <div className={'flex'}>
          <div className="flex-none w-2/12 relative">
            <img
              src={'https://lh3.googleusercontent.com/ogw/ADea4I6VLmj2JDCRaAILO3eM5-cHw-4PbQZkJMCwTj6a=s64-c-mo'}
              alt=""
              className="absolute inset-0 m-auto self-center object-cover rounded-full"
              height="75"
              width="75"
            />
          </div>
          <div className={'flex-auto p-4'}>
            <div className={'my-1'}>
              <div className={'text-lg'}>
                {description}
              </div>
              <div className={'my-1'}>
                <SkillsCard skills={skills} />
              </div>
              <div className={'text-lg'}>
                {sessionPrice && numberOfSessions && `${<b>Total Value:</b>} £${sessionPrice*numberOfSessions}`}
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (mode === 'edit') {
      return (
        <div className={'grid grid-cols-2 p-4'}>
          <div className={''}>
            <TextInput onChange={setEditName} value={editName} label={'Name'} />
          </div>
          <div className={''}>
            <TextInput onChange={setEditDescription} value={editDescription} label={'Description'} />
          </div>
          <div className={''}>
            <DatePickerInput date={editStartDate} onDatePickerChange={handleStartDateChange} label={'Start Date'} />
          </div>
          <div className={''}>
            <DatePickerInput startDate={editStartDate} date={editEndDate} onDatePickerChange={setEditEndDate} label={'End Date'}  />
          </div>
        </div>
      )
    }
  };

  return (
    <div
      onClick={() => clickable && router.push(RouterEnums.CONTRACT.replace('{slug}', `${id}`))}
      key={`contractcard${id}`}
      className={'flex flex-col border-solid border-2 border-transparent w-full my-4 rounded overflow-hidden shadow-lg text-white card-dark-lighter-background cursor-pointer hover:shadow-2xl hover:border-blue-900'}
    >
      <div className={'flex w-full min-w-full p-4'}>
        <div className={'w-full'}>
          <div className={'text-xl font-bold my-2'}>
            {name}
            {getEditButton()}
          </div>
          {getCardContent()}
        </div>
      </div>
      {getContractStatusBar(status.status, getDateRange())}
    </div>
  );
};
 
export default ContractSummaryCard;
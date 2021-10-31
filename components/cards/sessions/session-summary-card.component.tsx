import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import React from 'react';
import { VscBellDot, VscCalendar } from 'react-icons/vsc';
import { ISession, RouterEnums } from '../../../lib';
 
export interface ISessionSummaryCardProps {
  session: ISession;
  clickable: boolean;
}
 
const SessionSummaryCard: React.FC<ISessionSummaryCardProps> = ({
  session,
  clickable,
}) => {
  const router = useRouter();
  const { id, endDate, startDate, status, name, description, notes } = session;

  const getDateRange = () => {
    let res = '';
    if (startDate) {
      res += `${dayjs(startDate).format('MMM D, YYYY')} ${dayjs(startDate).format('h:mm A')}`;
    }

    if (endDate) {
      res += ` -> ${dayjs(endDate).format('h:mm A')}`;
    }

    return res;
  };

  const getSessionStatusBar = (status: string, dateRange: string) => {
    if (status === 'Scheduled') {
      return (
        <div className={'bg-purple-500 w-full flex p-4 flex-row text-xl'}>
          <div className={'flex w-1/2'}>
            <VscCalendar className={'text-white text-lg mr-2 mt-1'} /> Scheduled
          </div>
          <div className={'flex w-1/2 mt-1 flex-row-reverse text-sm'}>
            {dateRange}
          </div>
        </div>
      );
    }
  };

  return (
    <div
      onClick={() => clickable && router.push(RouterEnums.SESSION.replace('{slug}', `${id}`))}
      key={`contractcard${id}`}
      className={'flex flex-col border-solid border-2 border-transparent w-full my-4 rounded overflow-hidden shadow-lg text-white card-dark-lighter-background cursor-pointer hover:shadow-2xl hover:border-blue-900'}
    >
      <div className={'flex w-full min-w-full p-4'}>
        <div className={'w-full'}>
          <div className={'text-xl font-bold my-2'}>
            {name}
            <span className={'float-right'}><VscBellDot /></span>
          </div>
          <div className={'flex'}>
            <div className={'flex-auto p-4'}>
              <div className={'my-1'}>
                <div className={'text-lg'}>
                  {description}
                </div>
                <div className={'my-1'}>
                </div>
                <div className={'text-lg'}>
                  {notes}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {getSessionStatusBar(status.status, getDateRange())}
    </div>
  );
};
 
export default SessionSummaryCard;
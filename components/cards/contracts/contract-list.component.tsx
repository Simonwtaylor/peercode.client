import React from 'react'
import { VscBell, VscBellDot, VscFlame, VscRocket, VscSymbolEvent } from 'react-icons/vsc';

export interface IContractListProps {
  contracts: any[];
}
 
const ContractList: React.FC<IContractListProps> = ({
  contracts,
}) => {

  const getContractStatusBar = (status: string, dateRange: string) => {
    if (status === 'proposal') {
      return (
        <div className={'bg-purple-500 w-full flex p-4 flex-row text-xl'}>
          <div className={'flex w-1/2'}>
            <VscFlame className={'text-white text-lg mr-2 mt-1'} /> Proposal
          </div>
          <div className={'flex w-1/2 mt-1 flex-row-reverse text-sm'}>
            {dateRange}
          </div>
        </div>
      )
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
      )
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
      )
    }
  };

  const buildContractCards = () => {
    return contracts.map(({ startDate, endDate, name, status, id, description, price, unreadNotifications }) => {
     return ( <div key={`contractcard${id}`} className={'flex flex-col w-full my-4 rounded overflow-hidden shadow-lg text-white card-dark-lighter-background'}>
        <div className={'flex w-full min-w-full p-4'}>
          <div className={'w-full'}>
            <div className={'text-xl font-bold my-2'}>
              {name}
              <span className={"float-right"}>{(unreadNotifications.length > 0) ? <VscBellDot /> : <VscBell />}</span>
            </div>
            <div className={'flex'}>
              <div className="flex-none w-2/12 relative">
                <img
                  src={'https://lh3.googleusercontent.com/ogw/ADea4I6VLmj2JDCRaAILO3eM5-cHw-4PbQZkJMCwTj6a=s64-c-mo'}
                  alt=""
                  className="absolute inset-0 w-9/12 m-auto self-center h-full object-cover rounded-full"
                />
              </div>
              <div className={'flex-auto p-4'}>
                <div className={'my-1'}>
                  <div className={'text-lg'}>
                    {description}
                  </div>
                  <div className={'text-lg'}>
                    <b>Total Value:</b> £{price/100}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {getContractStatusBar(status, `${startDate} - ${endDate}`)}
      </div>)
      }
    )
  }

  return (
    <div className={'grid grid-cols-2 gap-6 w-full'}>
      {buildContractCards()}
    </div>
  );
};
 
export default ContractList;
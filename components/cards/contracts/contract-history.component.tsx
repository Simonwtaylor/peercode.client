import dayjs from 'dayjs';
import React, { useState } from 'react';
import { IContractHistory } from '../../../lib';
 
export interface IContractHistoryProps {
  contractHistories: IContractHistory[];
}
 
const ContractHistory: React.FC<IContractHistoryProps> = ({ contractHistories }) => {
  const [minimised, setMinised] = useState(false);

  const getBody = () => {
    if (minimised) {
      return <></>;
    }

    return (
      <div className={'text-base'}>
        {contractHistories.map(({ message, id, createdAt }) => (
          <div className={'flex'}
            key={`contracthistorymessage${id}`}
          >
            <div className="flex-none w-1/12 relative">
              <img
                src={'https://lh3.googleusercontent.com/ogw/ADea4I6VLmj2JDCRaAILO3eM5-cHw-4PbQZkJMCwTj6a=s64-c-mo'}
                alt=""
                className="absolute inset-0 m-auto self-center object-cover rounded-full"
                height="50"
                width="50"
              />
            </div>
            <div className={'flex-auto text-lg p-4'}>
              <span className={'block w-full'}>{message}</span>
              {
              (createdAt && 
                <span className={'block text-xs w-full'}>
                  {dayjs(createdAt).format('ddd, MMM D, YYYY h:mm A')}
                </span>
              )
            }
            </div>
            
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={'flex w-2/3 my-4 rounded overflow-hidden shadow-lg text-white card-dark-lighter-background'}>
      <div className={'flex-auto p-4'}>
        <div className={'my-1'}>
          <div
            onClick={() => setMinised(!minimised)}
            className={'text-xl font-bold my-2 cursor-pointer'}
          >
            History

          </div>
          {getBody()}
        </div>
      </div>
    </div>
  );
};
 
export default ContractHistory;
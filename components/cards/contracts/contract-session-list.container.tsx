import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { VscAdd } from 'react-icons/vsc';
import { getContractSessionsQuery, IContractSessionsResponse } from '../../../lib';
import { SessionSlimCard } from '../sessions/';
 
export interface IContractSessionsListProps {
  contractId: number;
  clickable: boolean;
}
 
const ContractSessionsList: React.FC<IContractSessionsListProps> = ({
  contractId,
  clickable,
}) => {
  const [expanded, setExpanded] = useState(true);
  const { data, loading, error } = useQuery<IContractSessionsResponse>(
    getContractSessionsQuery,
    {
      variables: {
        contractId,
      },
    }
  );

  if (loading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>{error}</>;
  }

  const getSessionCards = () => data?.contractSessions?.map((session) => 
    <SessionSlimCard key={`sessionsummarycard${session.id}`} session={session} clickable={clickable} />
  );

  return (
    <>
      <div
        onClick={() => setExpanded(!expanded)}
        className={'cursor-pointer flex w-2/3 mt-4 mb-1 rounded overflow-hidden shadow-lg text-white card-dark-lighter-background'}
      >
        <div className={'flex-auto p-4'}>
          <div className={'my-1'}>
            <div className={'text-xl font-bold my-2'}>
              Sessions

              <VscAdd className={'inline float-right cursor-pointer'} onClick={() => console.log('add')} />
            </div>
            <div className={'text-base'}>
            </div>
          </div>
        </div>
      </div>
      {
        (expanded && 
          <div className={'grid grid-cols-2 w-2/3 mt-1 mb-1 rounded overflow-hidden shadow-lg text-white p-2'}>
            {getSessionCards()}
          </div>
        )
      }
    </>
  );
};
 
export default ContractSessionsList;
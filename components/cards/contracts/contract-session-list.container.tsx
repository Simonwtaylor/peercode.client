import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { VscAdd } from 'react-icons/vsc';
import { getContractSessionsQuery, IContractSessionsResponse, IUserContract } from '../../../lib';
import { SessionSlimCard } from '../sessions/';
import SessionAddContainer from '../sessions/session-add.container';
 
export interface IContractSessionsListProps {
  contractId: number;
  clickable: boolean;
  users?: IUserContract[];
  signed?: boolean;
}
 
const ContractSessionsList: React.FC<IContractSessionsListProps> = ({
  contractId,
  clickable,
  users,
  signed,
}) => {
  const [expanded, setExpanded] = useState(true);
  const [addNew, setAddNew] = useState(false);
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
        className={'cursor-pointer flex w-2/3 my-4 rounded overflow-hidden shadow-lg text-white card-dark-lighter-background'}
      >
        <div className={'flex-auto p-4'}>
          <div className={'my-1'}>
            <div className={'text-xl font-bold my-2'}>
              Sessions

              {signed && <VscAdd className={'inline float-right cursor-pointer'} onClick={() => setAddNew(true)} />}
            </div>
            <div className={'text-base'}>
            </div>
          </div>
        </div>
      </div>
      {
        (expanded && 
          <div className={'grid grid-cols-2 gap-2 w-2/3 my-1 rounded overflow-hidden text-white p-2'}>
            {getSessionCards()}
          </div>
        )
      }
      {
        (addNew &&
          <div className={'cursor-pointer flex w-2/3 mt-1 mb-4 rounded overflow-hidden shadow-lg text-white card-dark-lighter-background'}>
            <SessionAddContainer
              contractId={contractId}
              users={users ?? []}
              onCancelSessionAdd={() => setAddNew(false)}
              onSessionAdded={() => {
                setExpanded(true);
                setAddNew(false);
              }}
            />
          </div>
        )
      }
    </>
  );
};
 
export default ContractSessionsList;
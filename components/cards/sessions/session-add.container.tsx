import { useMutation } from '@apollo/client';
import React from 'react';
import { createSessionMutation, getContractSessionsQuery, IUserContract } from '../../../lib';
import SessionAdd from './session-add.component';
 
export interface ISessionAddContainerProps {
  contractId: number;
  users: IUserContract[];
  onCancelSessionAdd: () => void;
  onSessionAdded: () => void;
}
 
const SessionAddContainer: React.FC<ISessionAddContainerProps> = ({
  contractId,
  users,
  onCancelSessionAdd,
  onSessionAdded,
}) => {
  const [createSession] = useMutation(createSessionMutation);

  const handleSessionAdd = (newSession: any) => {
    createSession({
      variables: {
        createSessionInput: {
          ...newSession,
          contractId,
          users: users.map((u) => u.userId),
          notes: '',
        },
      },
      refetchQueries: [getContractSessionsQuery],
    });
    onSessionAdded();
  };
  
  return (
    <SessionAdd onSessionAdd={handleSessionAdd} onCancelSessionAdd={onCancelSessionAdd} />
  );
};
 
export default SessionAddContainer;
import { useMutation } from '@apollo/client';
import React from 'react'
import { createSessionMutation, getContractSessionsQuery, IUserContract } from '../../../lib';
import SessionAdd from './session-add.component';
 
export interface ISessionAddContainerProps {
  contractId: number;
  users: IUserContract[];
}
 
const SessionAddContainer: React.FC<ISessionAddContainerProps> = ({
  contractId,
  users,
}) => {
  const [createSession] = useMutation(createSessionMutation);

  const handleSessionAdd = (newSession: any) => {
    createSession({
      variables: {
        createSessionInput: {
          ...newSession,
          contractId,
          users: users.map((u) => u.userId),
          notes: "",
        },
      },
      refetchQueries: [getContractSessionsQuery],
    });
  };
  
  return (
    <SessionAdd onSessionAdd={handleSessionAdd} />
  );
};
 
export default SessionAddContainer;
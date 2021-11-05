import { useMutation } from '@apollo/client';
import React from 'react'
import { createSessionMutation, getContractSessionsQuery } from '../../../lib';
import SessionAdd from './session-add.component';
 
export interface ISessionAddContainerProps {
  contractId: number;
  users: number[];
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
          users,
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
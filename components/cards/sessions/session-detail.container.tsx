import { useMutation, useQuery } from '@apollo/client';
import React from 'react';
import {
  endSessionMutation,
  getSessionDetailQuery,
  getSessionQuery,
  getSessionsForUserQuery,
  ISessionDetailResponse,
  startSessionMutation,
} from '../../../lib';
import SessionDetail from './session-detail.component';
 
export interface ISessionDetailContainerProps {
  sessionId: number;
}
 
const SessionDetailContainer: React.FC<ISessionDetailContainerProps> = ({ sessionId }) => {
  const { data, loading, error } = useQuery<ISessionDetailResponse>(
    getSessionDetailQuery,
    {
      variables: {
        sessionId,
      },
    }
  );

  const [startSession] = useMutation(startSessionMutation);
  const [endSession] = useMutation(endSessionMutation);

  if (loading) {
    return <>Loading...</>;
  }

  if (error || !data) {
    return <>{error}</>;
  }

  const handleStartSession = () => {
    startSession({
      variables: {
        sessionId,
      },
      refetchQueries: [getSessionDetailQuery, getSessionQuery, getSessionsForUserQuery]
    });
  };

  const handleEndSession = () => {
    endSession({
      variables: {
        sessionId,
      },
      refetchQueries: [getSessionDetailQuery, getSessionQuery, getSessionsForUserQuery]
    });
  };

  return (
    <SessionDetail sessionDetail={data?.sessionDetail} onSessionStart={handleStartSession} onSessionEnd={handleEndSession} />
  );
};
 
export default SessionDetailContainer;
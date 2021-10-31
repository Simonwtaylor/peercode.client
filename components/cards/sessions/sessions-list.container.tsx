import { useQuery } from '@apollo/client';
import React from 'react';
import { getSessionsForUserQuery, ISessionsForUserResponse } from '../../../lib';
import SessionSummaryCard from './session-summary-card.component';
 
export interface ISessionsListProps {
  userId: number;
  clickable: boolean;
}
 
const SessionsList: React.FC<ISessionsListProps> = ({
  userId,
  clickable,
}) => {
  const { data, loading, error } = useQuery<ISessionsForUserResponse>(
    getSessionsForUserQuery,
    {
      variables: {
        userId,
      },
    }
  );

  if (loading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>{error}</>;
  }

  const getSessionCards = () => data?.userSessions?.map((session) => 
    <SessionSummaryCard key={`sessionsummarycard${session.id}`} session={session} clickable={clickable} />
  );

  return (
    <>
      {getSessionCards()}
    </>
  );
};
 
export default SessionsList;
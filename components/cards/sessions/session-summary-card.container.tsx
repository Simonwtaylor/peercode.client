import { useQuery } from '@apollo/client';
import React from 'react';
import { getSessionQuery, ISessionResponse } from '../../../lib';
import SessionSummaryCard from './session-summary-card.component';
 
export interface ISessionsListProps {
  sessionId: number;
  clickable: boolean;
}
 
const SessionsList: React.FC<ISessionsListProps> = ({
  sessionId,
  clickable,
}) => {
  const { data, loading, error } = useQuery<ISessionResponse>(
    getSessionQuery,
    {
      variables: {
        id: sessionId,
      },
    }
  );

  if (loading) {
    return <>Loading...</>;
  }

  if (error || !data) {
    return <>{error}</>;
  }

  return (<SessionSummaryCard session={data?.session} clickable={clickable} />);
};
 
export default SessionsList;
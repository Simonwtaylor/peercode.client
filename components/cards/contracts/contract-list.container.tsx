import React from 'react';
import { ContractList } from '.';
import { useQuery } from '@apollo/client';
import { getContractsForUserQuery, IContractsForUserResponse } from '../../../lib';
 
export interface IContractListProps {
  userId: number;
}
 
const ContractListContainer: React.FC<IContractListProps> = ({
  userId,
}) => {
  const { data, loading, error } = useQuery<IContractsForUserResponse>(getContractsForUserQuery, {
    variables: {
      id: userId,
    },
  });

  if (loading) {
    return <>Loading...</>;
  }

  if (error || !data) {
    return <>{error}</>;
  }
  // TODO: Date formatting
  // dayjs().add(2, 'day').format('MMM D, YYYY'),

  return (
    <ContractList contracts={data?.contractsForUser} />
  );
};
 
export default ContractListContainer;
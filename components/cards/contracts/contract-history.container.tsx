import { useQuery } from '@apollo/client';
import React from 'react';
import { getContractHistoryQuery, IContractHistoriesResponse } from '../../../lib';
import ContractHistory from './contract-history.component';
 
export interface IContractHistoryContainerProps {
  contractId: number;
}
 
const ContractHistoryContainer: React.FC<IContractHistoryContainerProps> = ({
  contractId,
}) => {
  const { data, loading, error } = useQuery<IContractHistoriesResponse>(getContractHistoryQuery, {
    variables: {
      contractId: contractId,
    },
  });

  if (loading) {
    return <>Loading...</>;
  }

  if (error || !data) {
    return <>{error}</>;
  }

  return (
    <ContractHistory contractHistories={data?.contractHistories} />
  );
};
 
export default ContractHistoryContainer;
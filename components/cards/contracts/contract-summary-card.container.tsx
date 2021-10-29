import React from 'react';
import ContractSummaryCard from './contract-summary-card.component';
import { useQuery } from '@apollo/client';
import { getContractQuery, IContractResponse } from '../../../lib';

interface IContractSummaryCardContainer {
  contractId: number;
}

const ContractSummaryCardContainer: React.FC<IContractSummaryCardContainer> = ({
  contractId,
}) => {
  const { data, loading, error } = useQuery<IContractResponse>(getContractQuery, {
    variables: {
      id: contractId,
    },
  });

  if (loading) {
    return <>Loading...</>;
  }

  if (error || !data) {
    return <>{error}</>;
  }

  return (
    <ContractSummaryCard contract={data?.contract} clickable={false} />
  );
};
 
export default ContractSummaryCardContainer;
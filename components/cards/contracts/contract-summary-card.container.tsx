import { useRouter } from 'next/router';
import React from 'react';
import ContractSummaryCard from './contract-summary-card.component';
import { useQuery } from '@apollo/client';
import { getContractQuery, IContractResponse } from '../../../lib';
 
export interface IContractSummaryCardContainerProps {
 
}

const ContractSummaryCardContainer: React.FC<IContractSummaryCardContainerProps> = () => {
  const router = useRouter();

  const { data, loading, error } = useQuery<IContractResponse>(getContractQuery, {
    variables: {
      id: +(router.query?.id as string ?? '') ?? 0,
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
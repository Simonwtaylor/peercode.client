import React, { useContext } from 'react';
import ContractSummaryCard from './contract-summary-card.component';
import { useMutation, useQuery } from '@apollo/client';
import { getContractHistoryQuery, getContractQuery, IContract, IContractResponse, NavContext, updateContractMutation } from '../../../lib';

interface IContractSummaryCardContainer {
  contractId: number;
}

const ContractSummaryCardContainer: React.FC<IContractSummaryCardContainer> = ({
  contractId,
}) => {
  const { userId } = useContext(NavContext);
  const { data, loading, error } = useQuery<IContractResponse>(getContractQuery, {
    variables: {
      id: contractId,
    },
  });

  const [updateContract] = useMutation(updateContractMutation);

  if (loading) {
    return <>Loading...</>;
  }

  if (error || !data) {
    return <>{error}</>;
  }

  const handleUpdateContract = (newContract: IContract) => {
    if (data) {
      const { skills, sessions, userContracts, histories, status, ...rest } = newContract;
      updateContract({
        variables: {
          updateContractInput: {
            ...rest,
            statusId: data?.contract.status.id,
            userId,
          },
        },
        refetchQueries: [getContractQuery, getContractHistoryQuery],
      });
    }
  };

  return (
    <ContractSummaryCard
      contract={data?.contract}
      clickable={false}
      editable={true}
      onUpdateContract={handleUpdateContract}
    />
  );
};
 
export default ContractSummaryCardContainer;
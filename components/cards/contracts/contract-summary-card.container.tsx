import React, { useContext } from 'react';
import ContractSummaryCard from './contract-summary-card.component';
import { useMutation, useQuery } from '@apollo/client';
import {
  getContractHistoryQuery,
  getContractQuery,
  getContractUsersQuery,
  IContract,
  IContractResponse,
  IUserContract,
  NavContext,
  signContractMutation,
  updateContractMutation,
} from '../../../lib';
import { useRouter } from 'next/router';

interface IContractSummaryCardContainer {
  contractId: number;
  currentUser?: IUserContract;
}

const ContractSummaryCardContainer: React.FC<IContractSummaryCardContainer> = ({
  contractId,
  currentUser,
}) => {
  const router = useRouter();
  const { userId } = useContext(NavContext);
  const { data, loading, error } = useQuery<IContractResponse>(getContractQuery, {
    variables: {
      id: contractId,
    },
  });

  const [updateContract] = useMutation(updateContractMutation);
  const [signContract] = useMutation(signContractMutation);

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

  const handleSignContract = () => {
    if (currentUser) {
      signContract({
        variables: {
          updateUserContractSignatureInput: {
            id: currentUser.id,
            dateSigned: new Date(),
            isSigned: true,
          },
        },
        refetchQueries: [getContractQuery, getContractHistoryQuery, getContractUsersQuery],
      });

      router.push(`/contracts`)
    }
  };

  return (
    <ContractSummaryCard
      contract={data?.contract}
      clickable={false}
      editable={true}
      onUpdateContract={handleUpdateContract}
      currentUser={currentUser}
      onSignContract={handleSignContract}
      showSignButton={true}
    />
  );
};
 
export default ContractSummaryCardContainer;
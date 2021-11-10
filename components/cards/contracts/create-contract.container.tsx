import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import React from 'react';
import { createContractMutation, getContractsForUserQuery, ICreateContract, RouterEnums } from '../../../lib';
import CreateContract from './create-contract.component';
 
export interface ICreateContractContainerProps {
  userId: number;
  otherUserId: number;
}
 
const CreateContractContainer: React.FC<ICreateContractContainerProps> = ({
  userId,
  otherUserId,
}) => {
  const router = useRouter();
  const [createContract] = useMutation(createContractMutation);

  const handleContractCreate = (contract: ICreateContract) => {

    const userContracts = [
      {
        didCreate: true,
        isMentor: false,
        userId,
      },
      {
        didCreate: false,
        isMentor: true,
        userId: otherUserId,
      },
    ];

    createContract({
      variables: {
        createContractInput: {
          ...contract,
          userContracts,
        },
      },
      refetchQueries: [getContractsForUserQuery]
    });

    router.push(RouterEnums.CONTRACTS);
  };

  return (
    <CreateContract onContractCreate={handleContractCreate} />
  );
};
 
export default CreateContractContainer;
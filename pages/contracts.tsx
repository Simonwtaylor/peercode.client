import React, { useContext } from 'react';
import { Layout } from '../components/';
import { ContractListContainer } from '../components/cards/contracts';
import { UserContext } from '../lib';

const ContractsPage: React.FC = () => {
  const { user } = useContext(UserContext);

  return (
    <Layout>
      <div className={'w-full items-center content-center justify-items-center place-items-center m-2 p-2 grid'}>
        <ContractListContainer userId={user.id} />
      </div>
    </Layout>
  );
};

export default ContractsPage;

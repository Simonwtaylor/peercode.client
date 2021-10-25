import React, { useContext } from 'react';
import { Layout } from '../components/';
import { ContractListContainer } from '../components/cards/contracts';
import { NavContext } from '../lib';
 
export interface IContractsPageProps {

}

const ContractsPage: React.FC<IContractsPageProps> = () => {
  const { userId } = useContext(NavContext);

  return (
    <Layout>
      <div className={'w-full items-center content-center justify-items-center place-items-center m-2 p-2 grid'}>
        <ContractListContainer />
      </div>
    </Layout>
  );
};

export default ContractsPage;

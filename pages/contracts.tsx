import React from 'react';
import Layout from '../components/hoc/with-layout.component';
 
export interface IContractsPageProps {

}

const ContractsPage: React.FC<IContractsPageProps> = () => {
  return (
    <Layout>
      ContractsPage Works!
    </Layout>
  );
};

export default ContractsPage;

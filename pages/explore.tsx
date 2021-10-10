import React from 'react';
import { UserSearchContainer } from '../components';
import Layout from '../components/hoc/with-layout.component';
 
export interface IExplorePageProps { }

const ExplorePage: React.FC<IExplorePageProps> = () => {
  return (
    <Layout>
      <UserSearchContainer />
    </Layout>
  );
};

export default ExplorePage;

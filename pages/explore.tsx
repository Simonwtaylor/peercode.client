import React from 'react';
import { UserSearchContainer } from '../components';
import Layout from '../components/hoc/with-layout.component';

const ExplorePage: React.FC = () => {
  return (
    <Layout>
      <UserSearchContainer />
    </Layout>
  );
};

export default ExplorePage;

import React from 'react';
import Layout from '../components/hoc/with-layout.component';
 
export interface IExplorePageProps {

}

const ExplorePage: React.FC<IExplorePageProps> = () => {
  return (
    <Layout>
      ExplorePage Works!
    </Layout>
  );
};

export default ExplorePage;

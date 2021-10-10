import React from 'react';
import Layout from '../components/hoc/with-layout.component';
 
export interface IArticlesPageProps {

}

const ArticlesPage: React.FC<IArticlesPageProps> = () => {
  return (
    <Layout>
      ArticlesPage Works!
    </Layout>
  );
};

export default ArticlesPage;

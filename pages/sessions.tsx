import React from 'react';
import Layout from '../components/hoc/with-layout.component';
 
export interface ISessionsPageProps {

}

const SessionsPage: React.FC<ISessionsPageProps> = () => {
  return (
    <Layout>
      SessionsPage Works!
    </Layout>
  );
};

export default SessionsPage;

import React from 'react';
import Layout from '../components/hoc/with-layout.component';
 
export interface ISettingsPageProps {

}

const SettingsPage: React.FC<ISettingsPageProps> = () => {
  return (
    <Layout>
      SettingsPage Works!
    </Layout>
  );
};

export default SettingsPage;

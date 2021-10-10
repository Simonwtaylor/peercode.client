import React from 'react';
import Layout from '../components/hoc/with-layout.component';
 
export interface IChatPageProps {

}

const ChatPage: React.FC<IChatPageProps> = () => {
  return (
    <Layout>
      ChatPage Works!
    </Layout>
  );
};

export default ChatPage;

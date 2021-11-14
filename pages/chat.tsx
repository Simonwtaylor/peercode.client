import React, { useContext } from 'react';
import ChatListContainer from '../components/cards/chat/chat-list.container';
import Layout from '../components/hoc/with-layout.component';
import { NavContext } from '../lib';

const ChatPage: React.FC = () => {
  const { userId } = useContext(NavContext);

  return (
    <Layout>
      <ChatListContainer userId={userId} />
    </Layout>
  );
};

export default ChatPage;

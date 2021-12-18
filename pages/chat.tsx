import React, { useContext } from 'react';
import ChatListContainer from '../components/cards/chat/chat-list.container';
import Layout from '../components/hoc/with-layout.component';
import { UserContext } from '../lib';

const ChatPage: React.FC = () => {
  const { user: { id } } = useContext(UserContext);

  return (
    <Layout>
      <div className={'w-full items-center content-center justify-items-center place-items-center m-2 p-2 grid'}>
        <div className={'grid grid-cols-2 gap-6 w-full'}>
          <ChatListContainer userId={id} />
        </div>
      </div>
    </Layout>
  );
};

export default ChatPage;

import React, { useContext } from 'react';
import ChatListContainer from '../components/cards/chat/chat-list.container';
import Layout from '../components/hoc/with-layout.component';
import { NavContext } from '../lib';

const ChatPage: React.FC = () => {
  const { userId } = useContext(NavContext);

  return (
    <Layout>
      <div className={'w-full items-center content-center justify-items-center place-items-center m-2 p-2 grid'}>
        <div className={'grid grid-cols-2 gap-6 w-full'}>
          <ChatListContainer userId={userId} />
        </div>
      </div>
    </Layout>
  );
};

export default ChatPage;

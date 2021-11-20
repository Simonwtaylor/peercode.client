import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import AddMessageContainer from '../../components/cards/chat/add-message.container';
import MessagesContainer from '../../components/cards/chat/messages.container';
import Layout from '../../components/hoc/with-layout.component';
import { NavContext } from '../../lib';

const ChatPage: React.FC = () => {
  const router = useRouter();
  const id = +(router.query?.id as string ?? '') ?? 0;
  const { userId } = useContext(NavContext);

  return (
    <Layout>
      <div className={'w-full items-center content-center justify-items-center place-items-center m-2 p-2 grid'}>
        <MessagesContainer chatId={id} />
        <AddMessageContainer userId={userId} chatId={id} />
      </div>
    </Layout>
  );
};

export default ChatPage;

import { useQuery } from '@apollo/client';
import React from 'react';
import { getUserChatsQuery, IGetUserChatsResponse } from '../../../lib';
import ChatList from './chat-list.component';
 
export interface IChatListContainerProps {
  userId: number;
}
 
const ChatListContainer: React.FC<IChatListContainerProps> = ({ userId }) => {
  const { data, loading, error } = useQuery<IGetUserChatsResponse>(getUserChatsQuery, {
    variables: {
      id: userId,
    },
  });

  if (loading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>{error}</>;
  }

  return (
    <ChatList chats={data?.userChats ?? []} />
  );
};
 
export default ChatListContainer;
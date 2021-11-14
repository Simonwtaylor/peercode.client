import { useRouter } from 'next/router';
import React from 'react';
import { RouterEnums } from '../../../lib';
 
export interface IChatListProps {
  chats: any[];
}
 
const ChatList: React.FC<IChatListProps> = ({
  chats,
}) => {
  const router = useRouter();
  const getUserChats = () => {
    return chats.map((chat) => <div onClick={() => router.push(RouterEnums.CHAT.replace('{slug}', chat.id))}>{chat.name}</div>);
  };

  return (
    <>
      {getUserChats()}
    </>
  );
};
 
export default ChatList;
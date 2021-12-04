import { useRouter } from 'next/router';
import React from 'react';
import { IChat, IUser, RouterEnums } from '../../../lib';
 
export interface IChatListProps {
  chats: IChat[];
}
 
const ChatList: React.FC<IChatListProps> = ({
  chats,
}) => {
  const router = useRouter();

  const getUserImages = (users: { user: IUser }[]) => {
    return (
      <div className={'grid grid-cols-5 my-4'} style={{ height: '40px' }}>
        {
          users.map((u, i) => (
            <img
              key={`chatlistimage${i}`}
              src={u.user.imageUrl}
              className={'h-full inset-0 m-auto self-center object-cover rounded-full'}
            />
          ))
        }
      </div>
    );
  };

  const getUserChats = () => {
    return chats.map(({ name, id, userChats }, i) => (
      <div
        key={`userchats${i}`}
        className={'flex flex-col p-4 w-2/3 my-4 rounded overflow-hidden shadow-lg text-white card-dark-lighter-background cursor-pointer'}
        onClick={() => router.push(RouterEnums.CHAT.replace('{slug}', `${id}`))}
      >
        <span className={'text-xl font-bold'}>{name}</span>
        {userChats && userChats?.length > 0 && getUserImages(userChats)}
      </div>
    ));
  };

  return (
    <>
      {getUserChats()}
    </>
  );
};
 
export default ChatList;
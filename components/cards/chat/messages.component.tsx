import React from 'react';
import { IMessage } from '../../../lib';
 
export interface IMessagesProps {
  messages: IMessage[];
}
 
const Messages: React.FC<IMessagesProps> = ({
  messages,
}) => {

  const formatMessages = () => {
    return messages.map(({ content, user }) => {
      return (
        <div
          className={'flex w-2/3 my-4 rounded overflow-hidden shadow-lg text-white card-dark-lighter-background p-4'}
        >
          <div>
            <img
              src={user?.imageUrl}
              alt=""
              className="inset-0 m-auto self-center object-cover rounded-full"
              height="75"
              width="75"
            />
          </div>
          {content}
        </div>
      );
    });
  };

  return (
    <>
      {formatMessages()}
    </>
  );
};
 
export default Messages;
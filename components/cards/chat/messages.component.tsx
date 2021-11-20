import dayjs from 'dayjs';
import React, { useContext, useEffect, useRef } from 'react';
import { IMessage, IUser, NavContext } from '../../../lib';
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);
 
export interface IMessagesProps {
  messages: IMessage[];
}
 
export interface IMessageGroup {
  id: number;
  messages: IMessage[];
  user?: IUser;
  currentUser: boolean;
  ref?: React.RefObject<HTMLDivElement>;
}

const Messages: React.FC<IMessagesProps> = ({
  messages,
}) => {
  const { userId } = useContext(NavContext);
  const latestRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    latestRef.current?.scrollIntoView({});
  }, [messages])

  const groupMessages = () => {
    const groups: IMessageGroup[] = [];

    messages.forEach((message, i) => {
      if (groups.length === 0) {
        groups.push({
          id: 1,
          user: message.user,
          messages: [message],
          currentUser: (message.user?.id === userId),
          ref: (i === (messages.length - 1)) ? latestRef : undefined,
        });
        return;
      }

      // CurrentMessage is the same user as the last message
      if (groups[groups.length - 1].user?.id === message.user?.id) {
        groups[groups.length - 1].messages.push(message);
        if (i === (messages.length - 1)) {
          groups[groups.length - 1].ref = latestRef;
        }
        return;
      }

      groups.push({
        id: groups.length + 1,
        user: message.user,
        messages: [message],
        currentUser: (message.user?.id === userId),
        ref: (i === (messages.length - 1)) ? latestRef : undefined,
      });
    });

    return groups.map(({ id, currentUser, messages, user, ref }) => (
      <div
        key={`messageitem${id}`}
        style={{ 
          backgroundColor: (currentUser) ? 'blue' : 'grey',
          float: (currentUser) ? 'right' : 'left'
        }}
        ref={ref}
        className={'flex w-2/3 my-4 rounded-xl overflow-hidden shadow-lg text-white p-4'}
      >
          <div>
            <img
              src={user?.imageUrl}
              alt=""
              className="inset-0 m-auto self-center object-cover rounded-full"
              height="50"
              width="50"
            />
          </div>
          <div className={'grid grid-cols-1'}>
          {
            (messages.map(({ datePosted, content }) => {
              const newDate: any = dayjs(datePosted);

              return (
                <div className={'my-2 mx-4 w-full block'}>
                  <span className="w-full block text-xl">{content}</span>
                  <span className="w-full block">{newDate.fromNow()}</span> {/* eslint-disable-line */}
                </div>
              )
            }))
          }
          </div>
        </div>
    ));
  };

  return (
    <div style={{ maxHeight: '500px' }} className={'overflow-y-scroll w-2/3 p-4'}>
      {groupMessages()}
    </div>
  );
};
 
export default Messages;
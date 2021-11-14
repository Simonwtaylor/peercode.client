import { useQuery } from '@apollo/client';
import React from 'react';
import { getChatQuery, IGetChatResponse } from '../../../lib';
import Messages from './messages.component';
 
export interface IMessagesContainerProps {
  chatId: number;
}
 
const MessagesContainer: React.FC<IMessagesContainerProps> = ({
  chatId,
}) => {
  const { data, loading, error } = useQuery<IGetChatResponse>(getChatQuery, {
    variables: {
      id: chatId,
    },
    pollInterval: 5000,
  });

  if (loading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>{error}</>;
  }

  return (
    <Messages messages={data?.chat.messages ?? []} />
  );
};
 
export default MessagesContainer;
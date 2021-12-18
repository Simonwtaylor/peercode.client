import { useMutation } from '@apollo/client';
import React from 'react';
import { createMessageMutation, getChatQuery } from '../../../lib';
import AddMessage from './add-message.component';
 
export interface IAddMessageContainerProps {
  userId: number;
  chatId: number;
}
 
const AddMessageContainer: React.FC<IAddMessageContainerProps> = ({
  userId,
  chatId,
}) => {
  const [sendMessage] = useMutation(createMessageMutation);

  const handleSendMessage = (content: string) => {
    sendMessage({
      variables: {
        createMessageInput: {
          userId,
          chatId,
          content,
        },
      },
      refetchQueries: [getChatQuery],
    });
  };

  return (
    <AddMessage onSendMessage={handleSendMessage} />
  );
};
 
export default AddMessageContainer;
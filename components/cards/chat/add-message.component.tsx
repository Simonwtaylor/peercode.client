import React, { useState } from 'react'
import { Button, TextInput } from '../..';
 
export interface IAddMessageProps {
  onSendMessage: (content: string) => void;
}
 
const AddMessage: React.FC<IAddMessageProps> = ({ onSendMessage }) => {
  const [content, setContent] = useState('');
  return (
    <>
      <TextInput onChange={setContent} value={content} label={'Content'} placeholder={'Please type your message'} />
      <Button
        colour={'green'}
        text={'Send'}
        onClick={() => {
          onSendMessage(content);
          setContent('');
        }}
      />
    </>
  );
};
 
export default AddMessage;
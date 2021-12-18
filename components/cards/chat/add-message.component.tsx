import React, { useState } from 'react';
import { TextInput } from '../..';
 
export interface IAddMessageProps {
  onSendMessage: (content: string) => void;
}
 
const AddMessage: React.FC<IAddMessageProps> = ({ onSendMessage }) => {
  const [content, setContent] = useState('');
  return (
    <div
      className={'flex flex-row w-2/3 my-4'}
    >
      <div
        className={'w-full'}
      >
        <TextInput
          onChange={setContent}
          value={content}
          placeholder={'Please type your message'}
          classes={''}
          onEnterSubmit={() => {
            onSendMessage(content);
            setContent(''); 
          }}
        />
      </div>
    </div>
  );
};
 
export default AddMessage;
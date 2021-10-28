import React from 'react';
 
export interface IUserSearchProps {
  value?: string;
  onTextChange: (text: string) => void;
}
 
const UserSearch: React.FC<IUserSearchProps> = ({ value, onTextChange }) => {
  return (
    <>
      <input
        className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
        type="text"
        aria-label="Search for Users, Skills or Projects"
        placeholder="Search for Users, Skills or Projects"
        value={value ?? ''}
        onChange={(e) => onTextChange(e.currentTarget.value)}
      />
    </>
  );
};
 
export default UserSearch;
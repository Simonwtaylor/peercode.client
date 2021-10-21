import React, { useState } from 'react';
import { UserListContainer } from '../user-list';
import UserSearch from './user-search.component';
 
export interface IUserSearchContainerProps {
 
}
 
const UserSearchContainer: React.FC<IUserSearchContainerProps> = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = (text: string) => {
    setSearchText(text);
  };

  return (
    <div
      className={'m-10'}
    >
      <UserSearch value={searchText} onTextChange={handleSearchTextChange} />
      <UserListContainer />
    </div>
  );
};
 
export default UserSearchContainer;
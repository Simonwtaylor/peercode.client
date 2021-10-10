import React from 'react';
import { UserList } from '.';
import { useGetUsers } from '../../lib/queries/user/get-users.query';

export interface IUserListContainerProps {

}

const UserListContainer: React.FC<IUserListContainerProps> = () => {
  const { isLoading, isError, error, data } = useGetUsers();

  if (isLoading) {
    return <>Loading...</>;
  }

  if (isError) {
    return <>{error}</>;
  }

  return <UserList users={data ?? []} />;
};
 
export default UserListContainer;

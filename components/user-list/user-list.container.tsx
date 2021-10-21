import { useQuery } from '@apollo/client';
import React from 'react';
import { UserList } from '.';
import { getUsersQuery, IUsersResponse } from '../../lib';

export interface IUserListContainerProps {

}

const UserListContainer: React.FC<IUserListContainerProps> = () => {
  const { data, loading, error } = useQuery<IUsersResponse>(getUsersQuery);

  if (loading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>{error}</>;
  }

  return <UserList users={data?.users ?? []} />;
};
 
export default UserListContainer;

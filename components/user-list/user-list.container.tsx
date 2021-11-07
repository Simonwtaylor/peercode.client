import { useQuery } from '@apollo/client';
import React from 'react';
import { UserList } from '.';
import { usersSearchQuery, IUsersSearchResponse, ISkill } from '../../lib';

interface IUserListContainerProps {
  name?: string;
  skills?: ISkill[];
}

const UserListContainer: React.FC<IUserListContainerProps> = ({
  name,
  skills,
}) => {
  const { data, loading, error } = useQuery<IUsersSearchResponse>(usersSearchQuery, {
    variables: {
      searchUsersInput: {
        name,
        skills: ((skills && skills?.length > 0) ? skills?.map((a) => a.id) : []),
        meta: {
          cursor: 0,
          totalItems: 0,
          pageSize: 0,
          pages: 0,
        },
      },
    },
  });

  if (loading) {
    return <></>;
  }

  if (error) {
    return <>{error}</>;
  }

  return <UserList users={data?.searchUsers ?? []} />;
};

export default UserListContainer;

import { useRouter } from 'next/router';
import React from 'react'
import { RouterEnums } from '../../lib';
 
export interface IUserListProps {
  users: any[];
}
 
const UserList: React.FC<IUserListProps> = ({
  users,
}) => {
  const router = useRouter();
  return (
    <>
      {users.map(({ ID, Username }) => {
        return (
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => router.push(RouterEnums.USER.replace('{slug}', ID))}
          >
            {Username}
          </div>
        )
      })}
    </>
  );
};
 
export default UserList;
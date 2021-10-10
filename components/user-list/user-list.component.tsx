import React from 'react'
 
export interface IUserListProps {
  users: any[];
}
 
const UserList: React.FC<IUserListProps> = ({
  users,
}) => {
  return (
    <>
      {users.map((a) => {
        return (
          <>
            {a.Username}
          </>
        )
      })}
    </>
  );
};
 
export default UserList;
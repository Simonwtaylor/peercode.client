import React, { useEffect, useState } from 'react'
import { UserList } from '.';
 
export interface IUserListContainerProps {
 
}
 
const UserListContainer: React.FC<IUserListContainerProps> = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_PEERCODE_API_URL}/v1/api/users`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>{error}</>;
  }

  return <UserList users={data ?? []} />;
};
 
export default UserListContainer;
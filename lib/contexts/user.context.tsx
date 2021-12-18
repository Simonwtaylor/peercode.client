import { useQuery } from '@apollo/client';
import { useUser } from '@auth0/nextjs-auth0';
import React, { createContext, useState } from 'react';
import { getUserByUidQuery, IUser, IUserByUidResponse } from '..';

interface IUserContext {
	user: IUser;
}

const UserContext = createContext<IUserContext>({
  user: {} as any,
});
 
const UserContextProvider = ({ children }: any) => {
  const { user } = useUser();
  const [dbUser, setDbUser] = useState<any>();

  if (!user) { 
    return <>{children}</>;
  }

  if (!dbUser) {
    fetch(`http://localhost:5001/users/${user?.sub}`)
      .then((data) => data.json())
      .then((data) => setDbUser(data));
  }

  return (
    <UserContext.Provider value={{
      user: dbUser,
    }}>
      {children}
    </UserContext.Provider>
  );
};
 
export { UserContextProvider, UserContext };
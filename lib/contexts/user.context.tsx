import React, { createContext, useState } from 'react';

interface IUserContext {
	token: string;
	updateTokenInContext: () => void;
}

const UserContext = createContext<IUserContext>({
  token: '',
  updateTokenInContext: () => console.log(),
});

const UserContextProvider = ({ children }: any) => {
  const [token, setToken] = useState('');

  const updateTokenInContext = () => {
    fetch('http://localhost:3000/api/graphql')
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setToken(res?.accessToken)
      });
  };

  return (
    <UserContext.Provider value={{
      token,
      updateTokenInContext,
    }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, UserContext };
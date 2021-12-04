import React, { createContext, useState } from 'react';

interface ITokenContext {
	token: string;
	updateTokenInContext: () => void;
}

const TokenContext = createContext<ITokenContext>({
  token: '',
  updateTokenInContext: () => console.log(),
});

const TokenContextProvider = ({ children }: any) => {
  const [token, setToken] = useState('');

  const updateTokenInContext = () => {
    fetch('http://localhost:3000/api/graphql')
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setToken(res?.accessToken);
      });
  };

  return (
    <TokenContext.Provider value={{
      token,
      updateTokenInContext,
    }}>
      {children}
    </TokenContext.Provider>
  );
};

export { TokenContextProvider, TokenContext };
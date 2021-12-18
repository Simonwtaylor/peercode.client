import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import React, { useContext, useEffect } from 'react';
import { setContext } from '@apollo/client/link/context';
import { TokenContext } from '../../lib/contexts/token.context';

const WithApollo: React.FC = ({ children }) => {
  const { token, updateTokenInContext } = useContext(TokenContext);

  useEffect(() => {
    if (token === '') {
      updateTokenInContext();
    }
  }, [token]);

  const httpLink = createHttpLink({
    uri: 'http://localhost:5001/graphql',
  });
  
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      }
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    uri: 'http://localhost:5001/graphql',
    cache: new InMemoryCache({
      addTypename: false,
    }),
  });

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
};

export default WithApollo;

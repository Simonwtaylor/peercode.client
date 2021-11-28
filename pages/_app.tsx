import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NavContextProvider } from '../lib';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo-client';
import { UserProvider } from '@auth0/nextjs-auth0';
import { UserContextProvider } from '../lib/contexts/user.context';
import WithApollo from '../components/hoc/with-apollo.component';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <UserContextProvider>
        {/* <ApolloProvider client={client}> */}
        <WithApollo>
          <NavContextProvider>
            <Component {...pageProps} />
          </NavContextProvider>
        </WithApollo>
        {/* </ApolloProvider> */}
      </UserContextProvider>
    </UserProvider>
  );
}
export default MyApp;

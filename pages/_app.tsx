import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NavContextProvider } from '../lib';
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import { TokenContextProvider } from '../lib/contexts/token.context';
import WithApollo from '../components/hoc/with-apollo.component';
import { UserContextProvider } from '../lib/contexts/user.context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <TokenContextProvider>
        {/* <ApolloProvider client={client}> */}
        <WithApollo>
          <UserContextProvider>
            <NavContextProvider>
              <Component {...pageProps} />
            </NavContextProvider>
          </UserContextProvider>
        </WithApollo>
        {/* </ApolloProvider> */}
      </TokenContextProvider>
    </UserProvider>
  );
}
export default MyApp;

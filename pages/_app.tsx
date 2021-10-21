import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NavContextProvider } from '../lib';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo-client';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
        <NavContextProvider>
          <Component {...pageProps} />
        </NavContextProvider>
    </ApolloProvider>
  );
}
export default MyApp;

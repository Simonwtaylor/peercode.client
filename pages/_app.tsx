import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ReactQueryDevtools } from 'react-query/devtools'
import { NavContextProvider } from '../lib';
import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <NavContextProvider>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </NavContextProvider>
    </QueryClientProvider>
  );
}
export default MyApp;

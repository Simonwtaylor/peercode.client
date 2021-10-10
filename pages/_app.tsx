import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NavContextProvider } from '../lib';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavContextProvider>
      <Component {...pageProps} />
    </NavContextProvider>
  );
}
export default MyApp;

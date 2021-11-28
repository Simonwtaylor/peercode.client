import React from 'react';
import dynamic from 'next/dynamic';
import { useUser } from '@auth0/nextjs-auth0';
import Button from '../buttons/button.component';
 
export interface IWithLoginProps {
 
}
 
const WithLogin: React.FC<IWithLoginProps> = ({
  children,
}) => {
  const { user } = useUser();

  if (!user && typeof window !== 'undefined') { 
    return (
      <>
        <h1>You are not logged in...</h1>
        <Button text={'Login'} colour={'blue'} onClick={() => window.location.href = 'http://localhost:3000/api/auth/login'} />
      </>
    );
  }

  return (
    <>
      {children}
    </>
  );
};
 
export default dynamic(() => Promise.resolve(WithLogin), { ssr: false });
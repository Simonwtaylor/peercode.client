import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/hoc/with-layout.component';
import { useGetUser } from '../../lib/queries/';

export interface IUserPageProps {

}

const UserPage: React.FC<IUserPageProps> = () => {
  const { id } = useRouter().query;
  const { isLoading, isError, error, data } = useGetUser(id as string);

  if (isLoading) {
    return <>Loading...</>;
  }

  if (isError) {
    return <>{error}</>;
  }

  return <Layout><>{data.Username}</></Layout>;
};
 
export default UserPage;

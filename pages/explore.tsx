import React from 'react';
import { UserSearchContainer } from '../components';
import Layout from '../components/hoc/with-layout.component';
 
export interface IExplorePageProps {
  users?: any[];
}

const ExplorePage: React.FC<IExplorePageProps> = ({
  users,
}) => {
  console.log(users);
  return (
    <Layout>
      <UserSearchContainer />
    </Layout>
  );
};


export async function getServerSideProps(context: any) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_PEERCODE_API_URL}/v1/api/users`);
  const data = await res.json();

  return {
    props: {
      users: data ?? [],
    }, // will be passed to the page component as props
  }
}

export default ExplorePage;

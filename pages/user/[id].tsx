import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import React from 'react';
import { VscGithubAlt, VscTwitter, VscGlobe } from 'react-icons/vsc';
import Layout from '../../components/hoc/with-layout.component';
import { getUserQuery } from '../../lib/queries/';

export interface IUserPageProps {

}

const UserPage: React.FC<IUserPageProps> = () => {
  const router = useRouter();
  const { loading, error, data } = useQuery(getUserQuery, {
    variables: {
      id: +(router.query?.id as string ?? '') ?? 0,
    }
  });

  if (loading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>{error}</>;
  }

  const { username, email } = data?.user;

  return (
    <Layout>
      <div className={'w-full items-center content-center justify-items-center place-items-center m-2 p-2 grid'}>
        <div className={'flex w-1/2 my-4 rounded overflow-hidden shadow-lg text-white card-dark-lighter-background'}>
          <div className="flex-none w-48 relative">
            <img
              src={'https://lh3.googleusercontent.com/ogw/ADea4I6VLmj2JDCRaAILO3eM5-cHw-4PbQZkJMCwTj6a=s64-c-mo'}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className={'flex-auto p-6'}>
            <div>
              <div>
                <div>
                  <div style={{ marginTop: '15px', marginLeft: '10px' }}>
                    <div className={'text-3xl'}>
                      {username}
                    </div>
                    <div className={'text-lg'}>
                      {email}
                    </div>
                    <div className={'text-xl'}>
                      {''}
                    </div>
                    <div className={'my-4 text-xl flex'}>
                      <VscGithubAlt className="text-white" />
                      <VscGlobe className="text-white" />
                      <VscTwitter className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <MySkillsContainer /> */}
      </div>
    </Layout>
  );
};
 
export default UserPage;

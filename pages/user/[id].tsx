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

  const { Username, Email } = data;

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
                      {Username}
                    </div>
                    <div className={'text-lg'}>
                      {Email}
                    </div>
                    <div className={'text-xl'}>
                      {''}
                    </div>
                    {/* <div className={'my-4'}>
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Deactivate
                      </button>
                    </div> */}
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

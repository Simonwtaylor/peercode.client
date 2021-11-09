import { useRouter } from 'next/router';
import React from 'react';
import { VscGithubAlt, VscTwitter, VscGlobe, VscVerified } from 'react-icons/vsc';
import { IUser, RouterEnums } from '../../lib';
 
export interface IUserListProps {
  users: IUser[];
}
 
const UserList: React.FC<IUserListProps> = ({
  users,
}) => {
  const router = useRouter();
  return (
    <div
      className={'w-full grid grid-cols-2 gap-x-4'}
    >
      {users.map(({ id, username, email, role }) => {
        return (
          <div
            key={`userlistitem${id}`}
            onClick={() => router.push(RouterEnums.USER.replace('{slug}', `${id}`))}
            className={'flex flex-col border-solid border-2 border-transparent w-full my-4 rounded overflow-hidden shadow-lg text-white card-dark-lighter-background cursor-pointer hover:shadow-2xl hover:border-blue-900'}
          >
            <div className={'flex w-full min-w-full p-2'}>
              <div className={'w-full'}>
                <div className={'flex'}>
                  <div className="flex-none w-2/12 relative">
                    <img
                      src={'https://lh3.googleusercontent.com/ogw/ADea4I6VLmj2JDCRaAILO3eM5-cHw-4PbQZkJMCwTj6a=s64-c-mo'}
                      alt=""
                      className="absolute inset-0 m-auto self-center object-cover rounded-full"
                      height="75"
                      width="75"
                    />
                  </div>
                  <div className={'flex-auto p-2'}>
                    <div className={'my-1'}>
                      <div className={'text-2xl'}>
                        {username}
                      </div>
                      <div className={'my-1'}>
                        {email}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={'bg-blue-500 w-full flex p-2 flex-row text-xl'}>
              <div className={'flex w-full px-2'}>
                <div className={'flex w-2/3'}>
                  <VscVerified className={'text-white text-lg mr-2 mt-1'} />
                  <span className={'text-base inline'}>{role}</span>
                </div>
                <div className={'flex flex-row w-1/3 float-right justify-end text-right'}>
                  <VscGithubAlt className="float-right text-white" />
                  <VscGlobe className="float-right text-white" />
                  <VscTwitter className="float-right text-white" /> 
                </div>
              </div>
            </div>            
          </div>
        );
      })}
    </div>
  );
};
 
export default UserList;
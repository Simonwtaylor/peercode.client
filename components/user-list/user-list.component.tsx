import { useRouter } from 'next/router';
import React from 'react';
import { VscGithubAlt, VscTwitter, VscGlobe } from 'react-icons/vsc';
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
            className={'flex my-4 rounded border-solid border-2 border-transparent overflow-hidden shadow-sm text-white card-dark-lighter-background cursor-pointer hover:shadow-2xl hover:border-blue-900'}
          >
            <div className="flex-none w-32 relative">
              <img
                src={'https://lh3.googleusercontent.com/ogw/ADea4I6VLmj2JDCRaAILO3eM5-cHw-4PbQZkJMCwTj6a=s64-c-mo'}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className={'flex-auto p-1'}>
              <div>
                <div>
                  <div>
                    <div style={{ marginLeft: '10px' }}>
                      <div className={'text-2xl'}>
                        {username}
                      </div>
                      <div className={'text-base'}>
                        {email}
                      </div>
                      <div className={'text-base'}>
                        {role}
                      </div>
                      <div className={'my-4 text-2xl flex'}>
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
        );
      })}
    </div>
  );
};
 
export default UserList;
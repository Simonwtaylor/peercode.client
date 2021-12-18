import React, { useContext } from 'react';
import {
  VscComment,
  VscPreview,
  VscProject,
  VscRepo,
  VscSearch,
  VscTable,
  VscTools,
  VscVerified,
} from 'react-icons/vsc';
import { useRouter } from 'next/router';
import { NavContext, RouterEnums } from '../../lib';
import { useUser } from '@auth0/nextjs-auth0';

const Sidebar: React.FC = () => {
  const history = useRouter();
  const { activePage, updateActivePageInContext } = useContext(NavContext);
  const { user } = useUser();
  const handleNavigation = (route: RouterEnums) => {
    updateActivePageInContext(route);
    history.push(route);
  };
  
  return (
    <div className="w-2/12 bg-white rounded p-3 shadow-lg">
      <div
        className="flex items-center space-x-4 p-2 mb-5 cursor-pointer"
        onClick={() => handleNavigation(RouterEnums.SETTINGS)}
      >
        {user?.picture && <img className="h-12 rounded-full" alt={''} src={user?.picture} />}
        <div>
          <h6 className="font-semibold text-sm text-gray-700 capitalize font-poppins tracking-wide">{user?.name}</h6>
          <VscVerified className={'text-green-500'} />
        </div>
      </div>
      <ul className="space-y-2 text-sm">
        <li
          onClick={() => handleNavigation(RouterEnums.HOME)}
          className={'cursor-pointer'}
        >
          <div className={`${activePage === RouterEnums.HOME && 'bg-gray-200'} flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline`}>
            <VscProject className="text-gray-600 ml-1" />
            <span>Dashboard</span>
          </div>
        </li>
        <li
          onClick={() => handleNavigation(RouterEnums.SESSIONS)}
          className={'cursor-pointer'}
        >
          <div className={`${activePage === RouterEnums.SESSIONS && 'bg-gray-200'} flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline`}>
            <VscTable className="text-gray-600 ml-1" />
            <span>Sessions</span>
          </div>
        </li>
        <li
          onClick={() => handleNavigation(RouterEnums.CHATS)}
          className={'cursor-pointer'}
        >
          <div className={`${activePage === RouterEnums.CHATS && 'bg-gray-200'} flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline`}>
            <VscComment className="text-gray-600 ml-1" />
            <span>Chat</span>
          </div>
        </li>
        <li
          onClick={() => handleNavigation(RouterEnums.CONTRACTS)}
          className={'cursor-pointer'}
        >
          <div className={`${activePage === RouterEnums.CONTRACTS && 'bg-gray-200'} flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline`}>
            <VscRepo className="text-gray-600 ml-1" />
            <span>Contracts</span>
          </div>
        </li>
        <li
          onClick={() => handleNavigation(RouterEnums.EXPLORE)}
          className={'cursor-pointer'}
        >
          <div className={`${activePage === RouterEnums.EXPLORE && 'bg-gray-200'} flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline`}>
            <VscSearch className="text-gray-600 ml-1" />
            <span>Explore</span>
          </div>
        </li>
        <li
          onClick={() => handleNavigation(RouterEnums.SETTINGS)}
          className={'cursor-pointer'}
        >
          <div className={`${activePage === RouterEnums.SETTINGS && 'bg-gray-200'} flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline`}>
            <VscTools className="text-gray-600 ml-1" />
            <span>Settings</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
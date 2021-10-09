import React, { useContext } from 'react';
import { useRouter } from 'next/router';

import { RouterEnums } from '../../lib';
import { VscBriefcase } from 'react-icons/vsc';

export interface INavMenuProps {
  activePage?: string;
  route?: string;
}
 
const NavMenu: React.FC<INavMenuProps> = ({
  activePage,
  route,
}) => {
  const history = useRouter();

  return (
    <nav className="text-white nav-menu-background flex items-center justify-between flex-wrap bg-teal-500 p-2 shadow-lg w-full h-12">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <div className={`block mt-4 lg:inline-block lg:mt-0 text-teal-200 cursor-pointer ml-4 mr-4`}>
            <b>{route ?? ''}</b>
          </div>
          {((activePage === RouterEnums.JOBS || activePage === RouterEnums.CREATE_JOB) && 
            <div
              className={`${(activePage === RouterEnums.CREATE_JOB) ? 'active' : ''} block mt-4 lg:inline-block lg:mt-0 text-teal-200 cursor-pointer`}
              onClick={() => {
                // updateActivePageInContext(RouterEnums.CREATE_JOB);
                history.push(RouterEnums.CREATE_JOB)
              }}
            >
              <button
                className={'bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded'}
              >
                <VscBriefcase className={'inline mr-2'} />
                Create a Job
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
 
export default NavMenu;
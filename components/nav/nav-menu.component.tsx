import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { NavContext } from '../../lib';

export interface INavMenuProps {
  activePage?: string;
  route?: string;
}

const NavMenu: React.FC<INavMenuProps> = ({
  route,
}) => {
  const { activePage } = useContext(NavContext);

  return (
    <nav className="text-white nav-menu-background flex items-center justify-between flex-wrap bg-teal-500 p-2 shadow-lg w-full h-12">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <div className={'block mt-4 lg:inline-block lg:mt-0 text-teal-200 cursor-pointer ml-4 mr-4'}>
            <b>{activePage.replace('/', '')}{route ?? ''}</b>
          </div>
        </div>
      </div>
    </nav>
  );
};
 
export default NavMenu;
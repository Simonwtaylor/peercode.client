import React from 'react';
import NavMenu from '../nav/nav-menu.component';
import Sidebar from '../sidebar/sidebar.component';

const Layout: React.FC = ({ children }) => {
	return (
		<div className={'flex flex-wrap w-full min-h-screen'}>
			<Sidebar />
			<div className={'w-10/12 flex flex-col'}>
				<NavMenu />
				{children}
			</div>
		</div>
	);
};

export default Layout;

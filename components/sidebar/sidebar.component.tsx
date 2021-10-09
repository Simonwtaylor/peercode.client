import React, { useContext } from 'react';
import { VscOutput } from 'react-icons/vsc';
import { useRouter } from 'next/router';
import { RouterEnums } from '../../lib';

interface ISidebarProps {
	activePage?: string;
}

const Sidebar: React.FC<ISidebarProps> = ({
	activePage,
}) => {
	const history = useRouter();
  
	return (
		<div className="w-2/12 bg-white rounded p-3 shadow-lg">
			<div
				className="flex items-center space-x-4 p-2 mb-5 cursor-pointer"
				onClick={() => {
					history.push(RouterEnums.PROFILE.replace('{slug}', ''));
				}}
			>
				{/* <img className="h-12 rounded-full" alt={auth?.displayName ?? ''} src={auth?.photoURL ?? ''} />
				<div>
					<h4 className="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">{auth?.displayName}</h4>
					<span className="text-sm tracking-wide flex items-center space-x-1">
						<svg className="h-4 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
						</svg>
						<span className="text-gray-600">{dbUser?.role}</span>
					</span>
				</div> */}
			</div>
			<ul className="space-y-2 text-sm">
				<li
					onClick={() => {
						history.push(RouterEnums.HOME);
					}}
					className={'cursor-pointer'}
				>
					<div className={`${activePage === RouterEnums.HOME && 'bg-gray-200'} flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline`}>
						<span className="text-gray-600">
							<svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
						</span>
						<span>Dashboard</span>
					</div>
				</li>
				<li
					className={'cursor-pointer'}
				>
					<div className={`${activePage === 'notifications' && 'bg-gray-200'} flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline`}>
						<span className="text-gray-600">
							<svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
							</svg>
						</span>
						<span>Notifications</span>
					</div>
				</li>
				<li
					className={'cursor-pointer'}
				>
					<div className={`${activePage === 'notifications' && 'bg-gray-200'} flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline`}>
						<span className="text-gray-600">
							<svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
							</svg>
						</span>
						<span>Chat</span>
					</div>
				</li>
				<li
					onClick={() => {
						history.push(RouterEnums.PROFILE.replace('{slug}', ''));
					}}
					className={'cursor-pointer'}
				>
					<div className={`${activePage === RouterEnums.PROFILE && 'bg-gray-200'} flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline`}>
						<span className="text-gray-600">
							<svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
							</svg>
						</span>
						<span>My profile</span>
					</div>
				</li>
				<li
					onClick={() => {
						history.push(RouterEnums.JOBS);
					}}
					className={'cursor-pointer'}
				>
					<div className={`${activePage === RouterEnums.JOBS && 'bg-gray-200'} flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline`}>
						<span className="text-gray-600">
							<svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
							</svg>
						</span>
						<span>Jobs</span>
					</div>
				</li>
				<li
					onClick={() => {
						history.push(RouterEnums.APPLICATIONS);
					}}
					className={'cursor-pointer'}
				>
					<div className={`${activePage === RouterEnums.APPLICATIONS && 'bg-gray-200'} flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline`}>
						<VscOutput className="text-gray-600 ml-1" />
						<span>Applications</span>
					</div>
				</li>
				<li
					onClick={() => {
						history.push(RouterEnums.PROFILE.replace('{slug}', ''));
					}}
					className={'cursor-pointer'}
				>
					<div className={'flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline'}>
						<span className="text-gray-600">
							<svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
							</svg>
						</span>
						<span>Settings</span>
					</div>
				</li>
				<li
					className={'cursor-pointer'}
				>
					<div className={'flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline'}>
						<span className="text-gray-600">
							<svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
							</svg>
						</span>
						<span>Logout</span>
					</div>
				</li>
			</ul>
		</div>
	);
};
 
export default Sidebar;
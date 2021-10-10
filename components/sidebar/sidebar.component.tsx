import React from 'react';
import { VscComment, VscPreview, VscProject, VscRepo, VscSearch, VscTable, VscTools, VscVerified } from 'react-icons/vsc';
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
				<img className="h-12 rounded-full" alt={''} src={'https://lh3.googleusercontent.com/ogw/ADea4I6VLmj2JDCRaAILO3eM5-cHw-4PbQZkJMCwTj6a=s64-c-mo'} />
				<div>
					<h6 className="font-semibold text-sm text-gray-700 capitalize font-poppins tracking-wide">{'Simon Taylor'}</h6>
					<VscVerified className={'text-green-500'} />
				</div>
			</div>
			<ul className="space-y-2 text-sm">
				<li
					onClick={() => {
						history.push(RouterEnums.HOME);
					}}
					className={'cursor-pointer'}
				>
					<div className={`${activePage === RouterEnums.HOME && 'bg-gray-200'} flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline`}>
						<VscProject className="text-gray-600 ml-1" />
						<span>Dashboard</span>
					</div>
				</li>
				<li
					className={'cursor-pointer'}
				>
					<div className={`${activePage === 'notifications' && 'bg-gray-200'} flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline`}>
						<VscTable className="text-gray-600 ml-1" />
						<span>Sessions</span>
					</div>
				</li>
				<li
					className={'cursor-pointer'}
				>
					<div className={`${activePage === 'notifications' && 'bg-gray-200'} flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline`}>
						<VscComment className="text-gray-600 ml-1" />
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
						<VscRepo className="text-gray-600 ml-1" />
						<span>Contracts</span>
					</div>
				</li>
				<li
					onClick={() => {
						history.push(RouterEnums.JOBS);
					}}
					className={'cursor-pointer'}
				>
					<div className={`${activePage === RouterEnums.JOBS && 'bg-gray-200'} flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline`}>
						<VscSearch className="text-gray-600 ml-1" />
						<span>Explore</span>
					</div>
				</li>
				<li
					onClick={() => {
						history.push(RouterEnums.APPLICATIONS);
					}}
					className={'cursor-pointer'}
				>
					<div className={`${activePage === RouterEnums.APPLICATIONS && 'bg-gray-200'} flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline`}>
						<VscPreview className="text-gray-600 ml-1" />
						<span>Articles</span>
					</div>
				</li>
				<li
					onClick={() => {
						history.push(RouterEnums.PROFILE.replace('{slug}', ''));
					}}
					className={'cursor-pointer'}
				>
					<div className={'flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline'}>
						<VscTools className="text-gray-600 ml-1" />
						<span>Settings</span>
					</div>
				</li>
			</ul>
		</div>
	);
};
 
export default Sidebar;
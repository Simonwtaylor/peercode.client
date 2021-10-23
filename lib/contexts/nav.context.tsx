import React, { createContext, useState } from 'react';

interface INavContext {
	activePage: string;
	updateActivePageInContext: (page: string) => void;
	userId: number;
	updateUserIdInContext: (uId: number) => void;
}

const NavContext = createContext<INavContext>({
	activePage: 'home',
	updateActivePageInContext: (_: string) => console.log(),
	updateUserIdInContext: (_: number) => console.log(),
	userId: 1,
});

const NavContextProvider = ({ children }: any) => {
	const [activePage, setActivePage] = useState('home');
	const [userId, setUserId] = useState(1);

	const updateActivePageInContext = (page: string) => {
		setActivePage(page);
	};

	const updateUserIdInContext = (uId: number) => {
		setUserId(uId);
	};

	return (
		<NavContext.Provider value={{
			activePage,
			updateActivePageInContext,
			userId,
			updateUserIdInContext,
		}}>
			{children}
		</NavContext.Provider>
	);
};

export { NavContextProvider, NavContext };
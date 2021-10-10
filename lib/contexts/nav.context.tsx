import React, { createContext, useState } from 'react';

const NavContext = createContext<any>({});

const NavContextProvider = ({ children }: any) => {
	const [activePage, setActivePage] = useState('home');

	const updateActivePageInContext = (page: string) => {
		setActivePage(page);
	};

	return (
		<NavContext.Provider value={{
			activePage,
			updateActivePageInContext,
		}}>
			{children}
		</NavContext.Provider>
	);
};

export { NavContextProvider, NavContext };
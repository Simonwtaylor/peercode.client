import React, { createContext, useState } from 'react';

interface INavContext {
	activePage: string;
	updateActivePageInContext: (page: string) => void;
}

const NavContext = createContext<INavContext>({
  activePage: 'home',
  updateActivePageInContext: (_: string) => console.log(),
});

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
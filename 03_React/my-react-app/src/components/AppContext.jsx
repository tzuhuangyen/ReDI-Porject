import React, { createContext, useState, useContext } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'User',
    profilePicture: 'user.jpg',
  });

  return (
    <>
      <AppContext.Provider value={{ user, setUser }}>
        {children}
      </AppContext.Provider>
    </>
  );
};
export function useAppContext() {
  return useContext(AppContext);
}

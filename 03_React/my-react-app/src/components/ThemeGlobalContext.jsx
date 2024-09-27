import React, { createContext, useContext, useReducer } from 'react';

// Define the initial state
const initialState = { theme: 'light' };

//define the reducer
function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
}

//create context
const ThemeGlobalContext = createContext();

//create provider
export function ThemeGlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeGlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeGlobalContext.Provider>
  );
}
export function useThemeGlobalContext() {
  return useContext(ThemeGlobalContext);
}

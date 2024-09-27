import React from 'react';
import { useThemeGlobalContext } from './ThemeGlobalContext';

function ThemeToggler() {
  const { state, dispatch } = useThemeGlobalContext();

  return (
    <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
      Light or Dark Mode
    </button>
  );
}
export default ThemeToggler;

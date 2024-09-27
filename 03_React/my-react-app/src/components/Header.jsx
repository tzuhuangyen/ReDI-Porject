import React from 'react';
import { useThemeGlobalContext } from './ThemeGlobalContext';
import ThemeToggler from './ThemeToggler';
const Header = () => {
  const { state } = useThemeGlobalContext();

  return (
    <header
      style={{
        padding: '1rem',
      }}
    >
      <nav>
        <ul>
          <li>Home</li>
          <li>Explore</li>
          <li>Notifications</li>
          <li>Messages</li>
        </ul>
      </nav>
      <p>當前主題: {state.theme === 'light' ? '明亮' : '黑暗'}</p>
      <ThemeToggler />
    </header>
  );
};

export default Header;

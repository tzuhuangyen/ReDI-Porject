import React from 'react';
import { useThemeGlobalContext } from './ThemeGlobalContext';
import ThemeToggler from './ThemeToggler';

const Header = () => {
  const { state } = useThemeGlobalContext();

  return (
    <header
      style={{
        color: 'inherit', // 確保繼承全局樣式
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
    </header>
  );
};

export default Header;

import React from 'react';
import { useThemeGlobalContext } from './ThemeGlobalContext';
import ThemeToggler from './ThemeToggler';
import '../../src/styles/header.css';
import { GoHomeFill } from 'react-icons/go';
import { IoSearch } from 'react-icons/io5';
import { IoNotificationsOutline } from 'react-icons/io5';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';

const Header = () => {
  const { state } = useThemeGlobalContext();
  const iconColor = state.theme === 'dark' ? '#ffffff' : '#000000'; // 根據主題設置圖標顏色

  return (
    <header
      style={{
        color: 'inherit', // 確保繼承全局樣式
        padding: '1rem',
      }}
    >
      <nav className='header-nav'>
        <ul>
          <li>
            <GoHomeFill style={{ color: iconColor }} />{' '}
            <p style={{ color: iconColor }}>Home</p>
          </li>
          <li>
            <IoSearch style={{ color: iconColor }} />
            <p style={{ color: iconColor }}>Explore</p>{' '}
          </li>
          <li>
            <IoNotificationsOutline style={{ color: iconColor }} />
            <p style={{ color: iconColor }}>Notifications</p>
          </li>
          <li>
            <MdOutlineMarkEmailUnread style={{ color: iconColor }} />
            <p style={{ color: iconColor }}>Messages</p>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';
import '../../src/styles/sidebar.css';
import { useThemeGlobalContext } from './ThemeGlobalContext';
const Sidebar = () => {
  const { state } = useThemeGlobalContext();
  console.log(state);
  return (
    <div className={`sidebar ${state.theme}`}>
      {/* Search */}
      <div className='sidebar-section'>
        <h3>Search</h3>
        <input type='text' placeholder='Search...' />
      </div>

      {/* Who to Follow */}
      <div className='sidebar-section'>
        <h3>Who to Follow</h3>
        <ul>
          <li>@user1</li>
          <li>@user2</li>
          <li>@user3</li>
        </ul>
      </div>

      {/* Trends */}
      <div className='sidebar-section'>
        <h3>Trends</h3>
        <ul>
          <li>#Trend1</li>
          <li>#Trend2</li>
          <li>#Trend3</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

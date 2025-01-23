import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <nav
      style={{
        padding: '10px 20px',
        backgroundColor: isDarkMode ? '#333' : '#f8f9fa',
        color: isDarkMode ? '#fff' : '#000',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <h2>To-Do App</h2>
      <button
        onClick={handleThemeToggle}
        style={{
          padding: '8px 16px',
          backgroundColor: isDarkMode ? '#555' : '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;

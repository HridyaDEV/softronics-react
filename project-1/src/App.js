import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Components/Navbar';
import './Styles.css';
import Todo from './Components/Todo';

function App() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);


  return (
    <>
    
    <div  style={{
      backgroundColor: isDarkMode ? '#121212' : '#ffffff',
      color: isDarkMode ? '#ffffff' : '#000000',
      minHeight: '100vh',
      padding: '20px',
    }} >
        <Navbar/>
      
      <Todo/>
      </div>
    </>
    
      


      
      
    
  );
}

export default App;

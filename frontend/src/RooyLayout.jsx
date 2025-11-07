import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import LoginForm from "./components/LoginForm"
import { Outlet } from '@tanstack/react-router';
import Navbar from './components/NavBar';

const App = () => {
 

  return (
    <div>
      <Navbar/>
      {/* <HomePage/> */}
      
      <Outlet/>

    </div>
  );
};

export default App;
import React from 'react';
import './App.css';
import Header from './Components/Header';
import Profile from './Components/Profile';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <Profile />
    </div>
  );
}

export default App;

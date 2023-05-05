import React from 'react';
import './App.css';
import Box from '@mui/material/Box';

import {Routes, Route} from 'react-router-dom'
import SideList from './components/SideList';
import TopBar from './components/TopBar';

import Home from './views/Home';
import ClientsList from './views/ClientsList';
import LoginLogs from './views/LoginLogs';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box>
      <SideList></SideList>
      </Box>
      
      <Box component="main" sx={{ flexGrow: 1 }}>
      <TopBar></TopBar>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/clients' element={<ClientsList />} />
          <Route path='/logs' element={<LoginLogs />} />
        </Routes>
      </Box>
    </Box>
    
  );
}

export default App;

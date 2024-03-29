import React from 'react';
import './App.css';
import Box from '@mui/material/Box';

// router
import { Outlet } from "react-router-dom";
import SideList from './components/SideList';
import TopBar from './components/TopBar';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box>
      <SideList></SideList>
      </Box>
      
      <Box component="main" sx={{ flexGrow: 1 }}>
        <TopBar></TopBar>
        <Outlet />
      </Box>
    </Box>
    
  );
}

export default App;

import './App.css';

import {Routes, Route} from 'react-router-dom'
import Box from '@mui/material/Box';
import Main from './views/Main';
import SideList from './components/SideList';
import TopBar from './components/TopBar';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box component="side">
      <SideList></SideList>
      </Box>
      
      <Box component="main" sx={{ flexGrow: 1 }}>
      <TopBar></TopBar>
      <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Box>
    </Box>
    
  );
}

export default App;

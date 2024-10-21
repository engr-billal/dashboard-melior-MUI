import React from 'react';
import { Box } from '@mui/material';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const DashboardLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#F5F5F5' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, marginLeft: '100px' , width: '100%'}}>
        <Header />
        <Box component="main" sx={{ padding: '20px', paddingTop: '80px', overflowY: 'auto', width:'calc(100vw - 155px)', color: '#000000' }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Header = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'white', boxShadow: 'none', borderBottom: '1px solid #ddd', zIndex: 1200 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black' }}>
          Hello, Welcome to our dashboard
        </Typography>
        <Box>
          <IconButton>
            <NotificationsIcon sx={{ color: 'black' }} />
          </IconButton>
          <IconButton>
            <AccountCircle sx={{ color: 'black' }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
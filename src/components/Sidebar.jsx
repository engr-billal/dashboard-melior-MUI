import React from 'react';
import { Box, List, ListItem, ListItemIcon, Grid2 } from '@mui/material'; // Import Grid2 instead of Grid
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupIcon from '@mui/icons-material/Group';

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: "100px",
        height: '100vh',
        position: 'fixed',
        backgroundColor: 'white',
        borderRight: '1px solid #ddd',
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center', 
      }}
    >
      <List sx={{ marginTop: '80px' }}>
        <Grid2 container direction="column" alignItems="center" justifyContent="center" spacing={4}>
          <Grid2 item>
            <ListItem sx={{ justifyContent: 'center', cursor: 'pointer' }} button>
              <ListItemIcon sx={{ justifyContent: 'center', display: 'flex' }}>
                <DashboardIcon />
              </ListItemIcon>
            </ListItem>
          </Grid2>

          <Grid2 item>
            <ListItem sx={{ justifyContent: 'center', cursor: 'pointer' }} button>
              <ListItemIcon sx={{ justifyContent: 'center', display: 'flex' }}>
                <GroupIcon />
              </ListItemIcon>
            </ListItem>
          </Grid2>

          <Grid2 item>
            <ListItem sx={{ justifyContent: 'center',  cursor: 'pointer' }} button>
              <ListItemIcon sx={{ justifyContent: 'center', display: 'flex' }}>
                <SettingsIcon />
              </ListItemIcon>
            </ListItem>
          </Grid2>
        </Grid2>
      </List>
    </Box>
  );
};

export default Sidebar;
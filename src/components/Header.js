import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" sx={{ background: 'linear-gradient(to right, #FBBF24, #000000, #FBBF24)', boxShadow: 'none' }}>
      <Toolbar>
        <Typography variant="h1" sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 'bold', fontSize: '2rem', letterSpacing: '2px', color: 'white', textTransform: 'uppercase' }}>
          Weekday
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

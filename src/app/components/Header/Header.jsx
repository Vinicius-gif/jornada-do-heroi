'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchBar from './SearchBar/SearchBar';

export default function Header({searchValue, setSearchValue}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Heroes
          </Typography>
          <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

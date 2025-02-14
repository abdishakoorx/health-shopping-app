'use client';

import { useTheme } from "next-themes";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useState } from 'react';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    handleClose();
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        color="inherit"
        aria-label="toggle theme"
      >
        {theme === 'dark' ? <Brightness7Icon className="text-accent" /> : <Brightness4Icon className="text-accent-dark" />}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleThemeChange('light')}>Light</MenuItem>
        <MenuItem onClick={() => handleThemeChange('dark')}>Dark</MenuItem>
        <MenuItem onClick={() => handleThemeChange('system')}>System</MenuItem>
      </Menu>
    </>
  );
}
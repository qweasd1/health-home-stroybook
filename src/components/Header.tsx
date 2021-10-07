import React from 'react';
import {AppBar, Button, IconButton, Toolbar, Typography, Box} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export interface HeaderProps {
  title:string
  onMenuClick?:Function
}

export const Header = ({title,onMenuClick}: HeaderProps) => {
  return <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={()=> onMenuClick && onMenuClick()}
        >
          <MenuIcon />
        </IconButton>
        <Typography sx={{flexGrow:1}}></Typography>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography sx={{flexGrow:1}}></Typography>
        {/*<Button color="inherit">Login</Button>*/}
      </Toolbar>
    </AppBar>
  </Box>
}

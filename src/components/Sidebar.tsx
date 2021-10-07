import React from 'react';
import {Box, Divider, List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer} from "@mui/material";
import {Assessment, Assignment, LibraryBooks, HomeWork} from "@mui/icons-material";

export interface SidebarProps {
  isOpen:boolean,
  setIsOpen:Function
}


export const Sidebar = ({isOpen,setIsOpen}: SidebarProps) => {



  const toggleDrawer = (open:boolean) => (event:any) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setIsOpen(open);
  };

  const list = () => {

    return <Box
      sx={{ width: 250, mt:"1rem" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer( false)}
    >
      <List>
        <ListItem button >
          <ListItemIcon>
            <HomeWork />
          </ListItemIcon>
          <ListItemText primary={'Assessment'} />
        </ListItem>

        <ListItem button >
          <ListItemIcon>
            <Assignment />
          </ListItemIcon>
          <ListItemText primary={'Forms For Funding'} />
        </ListItem>

        <ListItem button >
          <ListItemIcon>
            <Assessment />
          </ListItemIcon>
          <ListItemText primary={'Reports For Recommendation'} />
        </ListItem>

        <ListItem button >
          <ListItemIcon>
            <LibraryBooks />
          </ListItemIcon>
          <ListItemText primary={'Resource Dictionary'} />
        </ListItem>
      </List>
      <Divider />

    </Box>
  }



  return <>
    <SwipeableDrawer
      anchor={'left'}
      open={isOpen}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer( true)}
    >
      {list()}
    </SwipeableDrawer>
  </>
}


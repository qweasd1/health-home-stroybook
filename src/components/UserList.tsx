import React from 'react';
import {Avatar, Box, Card, Divider, Stack, Typography} from "@mui/material";



export interface UserListProps {
  users:User[]
}


export const UserList = ({users}: UserListProps) => {
  return <>
    <Typography sx={{mb:2}} variant={'h5'}>Patient list</Typography>
    <Stack direction="column" spacing={2} divider={<Divider  flexItem />}>

      {users.map((user)=><Box>
        <Stack direction={'row'} >

          <Avatar {...stringAvatar(user.name)}  />
          <Stack direction={'column'}>
            <Box sx={{typography:"subtitle"}}>{user.name}</Box>
            <Box sx={{fontSize:"small", fontStyle:"italic"}}>{user.address}</Box>
          </Stack>
        </Stack>

      </Box>)}
    </Stack>
  </>
}


function stringToColor(string:string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name:string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      mr:"0.5rem"
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

export interface User {
  name:string
  address: string
}

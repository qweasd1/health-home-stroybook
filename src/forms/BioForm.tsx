import {Box, TextField} from '@mui/material';
import React from 'react';

export interface BioFormProps {

}

export const BioForm = ({}: BioFormProps) => {
  return <>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
          defaultValue="Tony Wang"
        />
        <TextField
          required
          id="outlined-required"
          label="Address"
          defaultValue="10234 Some Street, Apt 8"
        />

        <TextField
          required
          id="outlined-required"
          label="Member ID"
          defaultValue=""
        />

        <TextField
          required
          id="outlined-required"
          label="Birthday"
          defaultValue=""
        />





      </div>
    </Box>
  </>
}

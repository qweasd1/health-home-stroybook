import React from 'react';
import {Box, Checkbox, Divider, FormControlLabel, FormGroup, Stack, TextField} from "@mui/material";

export interface MedicalFormProps {

}

export const MedicalForm = ({}: MedicalFormProps) => {
  return <Stack direction={"column"} spacing={4} divider={<Divider/>}>
    <FormGroup sx={{
      '& .MuiTextField-root': { m: 1 },
    }}>
      <FormControlLabel control={<Checkbox />} label="CVA" />
      <FormControlLabel control={<Checkbox />} label="Cardiac" />
      <FormControlLabel control={<Checkbox />} label="COPD" />
      <FormControlLabel control={<Checkbox />} label="DM" />
      <FormControlLabel control={<Checkbox />} label="Parkinson's" />
      <FormControlLabel control={<Checkbox />} label="MS" />
      <FormControlLabel control={<Checkbox />} label="CA" />
      <FormControlLabel control={<Checkbox />} label="ALS" />

      <TextField fullWidth
        id="outlined-number"
        label="Other)"
        type="text"
      />
    </FormGroup>
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
          label="Height(x' y'')"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="Weight"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="Dominant Hand"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="Pain Level"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="Location (pain)"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="Where"
          defaultValue=""
        />
      </div>
    </Box>

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
          label="Aide Assistance"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="Hours per day"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="Days per week"
          defaultValue=""
        />

      </div>
    </Box>

  </Stack>
}

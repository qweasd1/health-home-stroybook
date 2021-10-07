import React, {useState} from 'react';
import {Divider, FormControl, InputLabel, MenuItem, Select, Stack} from "@mui/material";

export interface ParticipantFunctionalGoalFormProps {

}




export const ParticipantFunctionalGoalForm = ({}: ParticipantFunctionalGoalFormProps) => {
  return <>
    <Stack direction={'column'} spacing={3}>
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label">Goal 1</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Goal 1"
        >
          <MenuItem value={1}>Bathroom safety</MenuItem>
          <MenuItem value={2}>Safety on stairs</MenuItem>
          <MenuItem value={3}>Egress from home</MenuItem>
          <MenuItem value={4}>Mobility in home</MenuItem>
          <MenuItem value={5}>Bed and bath access</MenuItem>
        </Select>
      </FormControl>



      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Goal 2</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Goal 2"

        >
          <MenuItem value={1}>Bathroom safety</MenuItem>
          <MenuItem value={2}>Safety on stairs</MenuItem>
          <MenuItem value={3}>Egress from home</MenuItem>
          <MenuItem value={4}>Mobility in home</MenuItem>
          <MenuItem value={5}>Bed and bath access</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Goal 3</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Goal 3"
        >
          <MenuItem value={1}>Bathroom safety</MenuItem>
          <MenuItem value={2}>Safety on stairs</MenuItem>
          <MenuItem value={3}>Egress from home</MenuItem>
          <MenuItem value={4}>Mobility in home</MenuItem>
          <MenuItem value={5}>Bed and bath access</MenuItem>
        </Select>
      </FormControl>
    </Stack>

  </>
}

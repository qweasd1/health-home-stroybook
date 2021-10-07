import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, ButtonGroup, CssBaseline, IconButton} from "@mui/material";
import {LoadingButton} from "@mui/lab";
// import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';


function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div style={{margin:'1rem'}}>
        <Button color="secondary" variant={'contained'} size={"small"} endIcon={<DeleteIcon/>}>test</Button>
        <ButtonGroup variant="outlined" aria-label="outlined primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <IconButton>
          <DeleteIcon color={"primary"}/>
        </IconButton>
        <LoadingButton
          loading={false}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="outlined"
        >
          Save
        </LoadingButton>
      </div>
    </React.Fragment>

  );
}

export default App;

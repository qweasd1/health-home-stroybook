import React, {useState} from 'react';
import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import EntryStairImage from '../components/assets/entry_star.jpg';
import DoorHandlerImage from '../components/assets/door_handler.jpg';
import CanvasDraw from "react-canvas-draw";



export interface StairFormProps {

}

export const StairForm = ({}: StairFormProps) => {
  const [isShowImage,setIsShowImage] = useState(false)
  const [isShowDoorHandler,setIsShowDoorHandler] = useState(false)

  return <>
    <Stack direction="column" spacing={5} divider={<Divider/>}>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '30ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant={"h5"}>Stairs</Typography>
        <div>
          <FormControl sx={{width:"30ch",m:1}}>
            <InputLabel id="demo-simple-select-label">Location</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Location"
            >
              <MenuItem value={1}>1st to 2nd floor</MenuItem>
              <MenuItem value={2}>Outside</MenuItem>
              <MenuItem value={3}>Basement</MenuItem>
              <MenuItem value={4}>2nd to 3rd floor</MenuItem>
            </Select>
          </FormControl>
          <TextField
            required
            id="outlined-required"
            label="Steps"
            type={"number"}
            defaultValue=""
          />

          <TextField
            required
            id="outlined-required"
            label="Width (bottom)"
            type={"number"}
            defaultValue=""
          />

          <TextField
            required
            id="outlined-required"
            label="Width (top)"
            type={"number"}
            defaultValue=""
          />

          <FormControl sx={{width:"30ch",m:1}}>
            <InputLabel id="demo-simple-select-label">Rail</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Rail"
            >
              <MenuItem value={1}>L Ascending</MenuItem>
              <MenuItem value={2}>R Ascending</MenuItem>
              <MenuItem value={3}>Bilateral</MenuItem>
              <MenuItem value={4}>None</MenuItem>
            </Select>
          </FormControl>
          <br/>

          <Button onClick={()=>setIsShowImage(true)} sx={{m:1}} startIcon={<CameraAltIcon/>} variant={'contained'}> Take Photo</Button>
          {isShowImage && <CanvasDraw imgSrc={EntryStairImage} lazyRadius={0} brushRadius={4} brushColor={"#b62c2c"} />}
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
        <Typography variant={"h5"}>Door Handlers</Typography>
        <div>
        {/*  <FormControl sx={{width:"30ch",m:1}}>*/}
        {/*    <InputLabel id="demo-simple-select-label">Location</InputLabel>*/}
        {/*    <Select*/}
        {/*      labelId="demo-simple-select-label"*/}
        {/*      id="demo-simple-select"*/}
        {/*      label="Location"*/}
        {/*    >*/}
        {/*      <MenuItem value={1}>1st to 2nd floor</MenuItem>*/}
        {/*      <MenuItem value={2}>Outside</MenuItem>*/}
        {/*      <MenuItem value={3}>Basement</MenuItem>*/}
        {/*      <MenuItem value={4}>2nd to 3rd floor</MenuItem>*/}
        {/*    </Select>*/}
        {/*  </FormControl>*/}
          <TextField
            required
            label="Shape"
            type={"text"}
            defaultValue=""
          />
          <br/>

        {/*  <TextField*/}
        {/*    required*/}
        {/*    id="outlined-required"*/}
        {/*    label="Width (bottom)"*/}
        {/*    type={"number"}*/}
        {/*    defaultValue=""*/}
        {/*  />*/}

        {/*  <TextField*/}
        {/*    required*/}
        {/*    id="outlined-required"*/}
        {/*    label="Width (top)"*/}
        {/*    type={"number"}*/}
        {/*    defaultValue=""*/}
        {/*  />*/}

        {/*  <FormControl sx={{width:"30ch",m:1}}>*/}
        {/*    <InputLabel id="demo-simple-select-label">Rail</InputLabel>*/}
        {/*    <Select*/}
        {/*      labelId="demo-simple-select-label"*/}
        {/*      id="demo-simple-select"*/}
        {/*      label="Rail"*/}
        {/*    >*/}
        {/*      <MenuItem value={1}>L Ascending</MenuItem>*/}
        {/*      <MenuItem value={2}>R Ascending</MenuItem>*/}
        {/*      <MenuItem value={3}>Bilateral</MenuItem>*/}
        {/*      <MenuItem value={4}>None</MenuItem>*/}
        {/*    </Select>*/}
        {/*  </FormControl>*/}
        {/*  <br/>*/}

          <Button onClick={()=>setIsShowDoorHandler(true)} sx={{m:1}} startIcon={<CameraAltIcon/>} variant={'contained'}> Take Photo</Button>
          {isShowDoorHandler && <CanvasDraw imgSrc={DoorHandlerImage} lazyRadius={0} brushRadius={4} brushColor={"#b62c2c"} />}
        </div>
      </Box>


    </Stack>

  </>
}

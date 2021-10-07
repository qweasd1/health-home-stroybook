import {Box, Container, Fab, Stack, Typography} from '@mui/material';
import React from 'react';
import {Header} from "../components/Header";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export interface AssessmentPageProps {
  title:string
  children: any
}

export const AssessmentPage = ({title,children}: AssessmentPageProps) => {
  return <>
    <Header title={'Assessment for "Tony Wang"'}/>
    <Container>
      <Stack direction={"row"} sx={{pt:4}}>
        <Box sx={{width:"50%"}}>
          <Typography variant={'h3'}>{title}</Typography>

        </Box>
        <Box sx={{width:"50%"}}>
          {children}
        </Box>
      </Stack>
    </Container>
    <Fab sx={{position:"fixed", right:"3rem",bottom:"3rem"}} color="primary" aria-label="next">
      <NavigateNextIcon/>
    </Fab>
  </>
}

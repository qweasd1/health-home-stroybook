import React, {useState} from 'react';
import {Header} from "../components/Header";
import {Box, Card, Container, Drawer, Stack, Typography} from "@mui/material";
import {Sidebar} from "../components/Sidebar";
import {UserList} from "../components/UserList";
import {Primary as UserPrimary} from "../components/UserList.stories";
import {Assessment, Assignment, HomeWork, LibraryBooks} from "@mui/icons-material";

export interface HomePageProps {

}

export const HomePage = ({}: HomePageProps) => {
  const [sidebarState,setSidebarState] = useState(false)
  return <>
    <Header title={'Heathy Home'} onMenuClick={()=>setSidebarState(!sidebarState)}/>
    <Sidebar isOpen={sidebarState} setIsOpen={setSidebarState}/>

    <Container maxWidth="xl" sx={{mt:"1rem"}}>
      <Stack direction={"row"}>
        <Card sx={{width:300,p:"1rem"}}>
          <UserList  users={UserPrimary.args?.users!} />
        </Card>
        <Card sx={{ml:"1rem",p:"1rem", flex:"1 1 0", boxSizing:"border-box",height:"80vh"}}>
          <Box sx={{
            color: "primary",
            display:"inline-block",
            flexDirection:{"lg":"column","xl":"row"},
            width:"100%",
            // bgcolor:"primary.light",
            alignItems:"center",
            justifyItems: "center",
            mt:"1rem"
          }}>
            <Stack direction={'row'} sx={{width:"50%",display:"inline-block",p:"1rem",boxSizing:"border-box"}}>
              <HomeWork sx={{fontSize:50,color:"green"}} />  <Typography component="div" sx={{verticalAlign:"50%"}} variant={'h5'}>Assessment</Typography>
            </Stack>
            <Stack direction={'row'} sx={{width:"50%",display:"inline-block",p:"1rem",boxSizing:"border-box"}}>
              <Assignment sx={{fontSize:50,color:"primary.dark"}} /> <Typography component="div" sx={{verticalAlign:"50%"}} variant={'h5'}>Forms For Fundings</Typography>
            </Stack>
            <Stack direction={'row'} sx={{width:"50%",display:"inline-block",p:"1rem",boxSizing:"border-box"}}>
              <Assessment sx={{fontSize:50}} /> <Typography component="div" sx={{verticalAlign:"50%"}} variant={'h5'}>Reports & Recommendation</Typography>
            </Stack>
            <Stack direction={'row'} sx={{width:"50%",display:"inline-block",p:"1rem",boxSizing:"border-box"}}>
              <LibraryBooks sx={{fontSize:50, color:"secondary.dark"}} /> <Typography component="div" sx={{verticalAlign:"50%"}} variant={'h5'}>Resource Dictionary</Typography>
            </Stack>
          </Box>
        </Card>
      </Stack>
    </Container>
  </>
}

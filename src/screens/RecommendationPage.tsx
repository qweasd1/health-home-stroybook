import React from 'react';
import {Header} from "../components/Header";
import {Box, Container, Stack} from "@mui/material";
import {Flowpoint, Flowspace} from 'flowpoints';

export interface RecommendationPageProps {

}

const Node = ({text}: { text: string }) => {
  return <Box>
    <Box sx={{position: 'absolute', top: "50%", left: "50%", transform: "translate(-50%,-50%)",width:"90%",textAlign:"center"}}>{text}</Box>
  </Box>
}

export const RecommendationPage = ({}: RecommendationPageProps) => {
  return <>
    <Header title={`Recommendation for "Tony Wang"`}/>
    <Container sx={{mt: 2}}>
      <Stack direction="row">
        <Flowspace theme="indigo"
                   variant="outlined"
                   background="white"
                   style={{width: '50%', height: '100%'}}
                   connectionSize={4}
                   arrowStart={false}
                   arrowEnd={true}>
          <Flowpoint key="point_a" outputs={["point_b"]} variant="outlined" startPosition={{x: 0, y: 0}}>
            <Node text={'Stairs at front door'}></Node>
          </Flowpoint>

          <Flowpoint key="point_c" outputs={["point_b"]} variant="outlined" startPosition={{x: 0, y: 100}}>
            <Node text={'Stairs at front home'}></Node>
          </Flowpoint>

          <Flowpoint key="point_b" variant="outlined" startPosition={{x: 300, y: 50}}>
            <Node text={'Need a ramp in front of the home'}></Node>
          </Flowpoint>


          <Flowpoint key="point_d" outputs={["point_e"]} variant="outlined" startPosition={{x: 0, y: 200}}>
            <Node text={'Circular door knob'}></Node>
          </Flowpoint>


          <Flowpoint key="point_e" variant="outlined" startPosition={{x: 300, y: 200}}>
            <Node text={'Need a door handle'}></Node>
          </Flowpoint>

        </Flowspace>
        <Box>
          test
        </Box>
      </Stack>

    </Container>

  </>
}

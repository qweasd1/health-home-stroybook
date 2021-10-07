import React,{useState} from 'react';
import {Header} from "../components/Header";
import {Box, Button, Container} from "@mui/material";
// import { Document, Page } from 'react-pdf';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';




export interface ReportPageProps {
  orginalReport:string
  generatedReport:string
  reportName:string
}

export const ReportPage = ({orginalReport,generatedReport,reportName}: ReportPageProps) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [fileSource,setFileSource] = useState(orginalReport)

  function onDocumentLoadSuccess({ numPages }:any) {
    setNumPages(numPages);
  }


  return <>
    <Header title={`${reportName} for "Tony Wang"`}/>

    <Container sx={{mt:2}} maxWidth={"xl"}>
      <Button variant={'contained'} onClick={()=>setFileSource(generatedReport)}>Auto Fill</Button>
      <Box sx={{textAlign:"center"}}>
        <Document
          // file='http://192.168.1.12:8080/report_origin.pdf'
          file={fileSource}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </Box>
    </Container>
  </>
}

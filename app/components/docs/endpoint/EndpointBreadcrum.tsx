  import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { BreadCrumbsObject } from '@/types/endpoint/Endpoint';

 


export default function EndpointBreadcrum({
    breadCrumbsList
    
}:BreadCrumbsObject) {
    const {href1,text1,text2} = breadCrumbsList

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/docs">
      docs
    </Link>,
    <Typography key="1" sx={{ color: 'text.primary' }}>
      {text1}
    </Typography>,
     
    <Typography key="2" sx={{ color: 'text.primary' }}>
      {text2}
    </Typography>,
  ];

  return (
   <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
  );
}

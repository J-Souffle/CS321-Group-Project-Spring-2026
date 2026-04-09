"use client";

import React, { useState } from 'react';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';


export default function Home(){
  
  //display data
  return(
    <Box sx={{ bgcolor: '#f4f4f6', minHeight: '100vh', py: 4}}>
      {/*Header & Breadcrumbs (repeated to maintain consistency)*/}
      <Box sx={{ textAlign: 'center', mb: 4}}>
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 0.5, color: '#000000' }}>
          Savings Goals
        </Typography>

        <Breadcrumbs sx={{justifyContent: 'center', display: 'flex'}}>
          <Typography>
            Home
          </Typography>
          <Typography>
            Savings Goals
          </Typography>
        </Breadcrumbs>
        <Divider component="li" />
        <Typography variant= 'h5' sx = {{ fontweight: 800, mb: 0.5, color: '#000000'}}>
          Here you can find your current goals in place and how far you've gone to reach them!
        </Typography>
        <Typography variant = 'h5' sx = {{ fontweight: 800, mb: 0.5, color: '#000000'}}>
          Click to view more details:
        </Typography>
        <Divider component="li" />
        <Stack spacing={2}>
          <Button variant = "contained" size = "large">Goal 1: Current Progress - --%</Button>
          <Button variant = "contained" size = "large">Goal 2: Current Progress - --%</Button>
          <Button variant = "contained" size = "large">Goal 3: Current Progress - --%</Button>
        </Stack>
        <Button size = "large">Back to Home</Button>
      </Box>
    </Box>
  );
}
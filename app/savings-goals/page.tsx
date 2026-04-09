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
import Link from 'next/link';


export default function SavingsGoalsPage(){
  
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
        <Stack spacing={2} sx={{ mt: 2, alignItems: 'center' }}>
        <Link href="/savings-goals/1" passHref style={{ textDecoration: 'none', width: '100%', maxWidth: '400px' }}>
            <Button variant="contained" size="large" fullWidth>
            Goal 1: Current Progress - --%
            </Button>
        </Link>

        <Link href="/savings-goals/2" passHref style={{ textDecoration: 'none', width: '100%', maxWidth: '400px' }}>
            <Button variant="contained" size="large" fullWidth>
            Goal 2: Current Progress - --%
            </Button>
        </Link>

        <Link href="/savings-goals/3" passHref style={{ textDecoration: 'none', width: '100%', maxWidth: '400px' }}>
            <Button variant="contained" size="large" fullWidth>
            Goal 3: Current Progress - --%
            </Button>
        </Link>
        </Stack>
        <Button size = "large">Back to Home</Button>
      </Box>
    </Box>
  );
}
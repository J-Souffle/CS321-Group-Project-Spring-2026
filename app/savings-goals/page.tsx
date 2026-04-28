"use client";

import React, { useEffect, useState } from 'react';
import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import TransactionHistory, {Contribution, SavingsGoal } from '../components/TransactionHistory';
import InsertUserGoal from '../user-data/InsertData'
import GetUserGoal from '../user-data/GetData'
import {supabase} from "../supabase-client";


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

        {/*Separate Section for brief overview*/}
        <Divider component="li" />
        <Typography variant= 'h5' sx = {{ fontweight: 800, mb: 0.5, color: '#000000'}}>
          Here you can find your current goals and add more!
        </Typography>
        <Typography variant = 'h6' sx = {{ fontweight: 800, mb: 0.5, color: '#000000'}}>
          Click to view more details:
        </Typography>
        <Divider component="li"/>

        {/*ask user to add their customized goal*/}
        <Typography variant = 'h5' sx = {{ fontweight: 800, mb: 0.5, color: '#000000'}}>
          Add Customized Goals here:
        </Typography>
        <InsertUserGoal />
        <Divider component="li" />

        {/*Show user's goals*/}
        <GetUserGoal />

        <Link href="/" passHref style={{ textDecoration: 'none' }}>
          <Button size = "large">
          Back to Home
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
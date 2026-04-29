"use client";

import React, { useEffect, useState } from 'react';
import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Divider from '@mui/material/Divider';
import Link from "@mui/material/Link"
import TransactionHistory, {Contribution, SavingsGoal } from '../components/TransactionHistory';
import InsertUserGoal from '../user-data/InsertData'
import DisplaySavingsGoals from "../display/DisplaySavingsGoals"
import {supabase} from "../supabase-client";

const handleClick = () => {
  
};

export default function SavingsGoalsPage(){
  
  //display data
  return(
    <div className="flex flex-1 items-center justify-center bg-zinc-50 font-sans ">
      
    <Box sx={{ bgcolor: '#ffffff', minHeight: '100vh', py: 4}}>
      {/*Header & Breadcrumbs (repeated to maintain consistency)*/}
      <Box sx={{ textAlign: 'center', mb: 4}}>
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 0.5, color: '#000000' }}>
          Savings Goals
        </Typography>
        <Breadcrumbs sx={{justifyContent: 'center', display: 'flex'}}>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="app/savings_g">
            Savings Goals
          </Link>
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
        <DisplaySavingsGoals />

        <Link underline="hover" color = "inherit" href ="/">
          <Button size = "large">
          Back to Home
          </Button>
        </Link>
      </Box>
    </Box>

    </div>
  );
}
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
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Link from 'next/link';


export default function Home(){
  
  return(
    <Box sx={{ bgcolor: '#f4f4f6', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 6, borderRadius: 4, textAlign: 'center' }}>
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 2, color: '#1a1a1a' }}>
            Finance Tracker 4 College Students
          </Typography>
          
          <Typography variant="h5" color="text.secondary" sx={{ mb: 6 }}>
            Manage your budget, track your spending, and reach your financial goals.
          </Typography>

          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={3} 
            justifyContent="center"
          >
            <Link href="/savings-goals" passHref style={{ textDecoration: 'none' }}>
              <Button 
                variant="contained" 
                size="large" 
                sx={{ py: 2, px: 4, fontSize: '1.1rem', borderRadius: 2 }}
              >
                View Savings Goals
              </Button>
            </Link>

            <Button 
              variant="outlined" 
              size="large" 
              sx={{ py: 2, px: 4, fontSize: '1.1rem', borderRadius: 2 }}
            >
              Recent Transactions
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
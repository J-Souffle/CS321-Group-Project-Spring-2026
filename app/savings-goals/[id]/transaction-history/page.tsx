"use client";

import * as React from 'react';
import Image from "next/image";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TransactionHistoryView from '../../../components/TransactionHistory';
import InsertTransaction from '../../../user-data/InsertTransaction';


export default function Home() {

  return (
    <Box sx={{ bgcolor: '#f4f4f6', minHeight: '100vh', py: 4}}>
      {/*Header & Breadcrumbs (repeated to maintain consistency)*/}
      <Box sx={{ textAlign: 'center', mb: 4}}>
      <Typography variant="h3" sx={{ fontWeight: 800, mb: 0.5, color: '#000000' }}>
          Transaction History
      </Typography>
      <Breadcrumbs sx={{ justifyContent: 'center', display: 'flex' }}>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/savings-goals">
            Savings Goals
          </Link>
          <Typography sx={{ color: 'text.primary' }}>
            Transaction History
          </Typography>
        </Breadcrumbs>
      </Box>

     {/*Separate Section for brief overview*/}
     <Divider component="li" />
        <Typography variant= 'h5' sx = {{ fontweight: 800, mb: 0.5, color: '#000000'}}>
          Here you can find your current transaction history and add new transactions!
        </Typography>
        <Divider component="li"/>

        {/*ask user to add their transaction*/}
        <Typography variant = 'h5' sx = {{ fontweight: 800, mb: 0.5, color: '#000000'}}>
          Add transactions here:
        </Typography>
        <InsertTransaction />

        <Divider component="li" />

         {/*Show user's goals*/}
         <TransactionHistoryView />

         <Link underline="none" href="/">
          <Button size="large">
            Back to Home
        </Button>
      </Link>
      </Box>
  );
}
//     <div className="flex flex-1 items-center justify-center bg-zinc-50 font-sans ">
//       <main className="flex flex-1 w-full flex-col max-w-4xl py-32 px-16 bg-zinc-50">
//         <div className="flex flex-row justify-between my-2">
//           <h1 className="text-5xl text-black">History</h1>
//           <FormControl sx={{ minWidth: 120 }}>
//             <InputLabel id="demo-simple-select-label">Filter</InputLabel>
//             {/* Form is unfinished - add more labels and JS later */}
//             <Select
//             label="Filter"
//             >
//               <MenuItem value={"Newest"}>Newest</MenuItem>
//               <MenuItem value={"Oldest"}>Oldest</MenuItem>
//             </Select>
//           </FormControl>
//         </div>
//         <Breadcrumbs className="mb-4" aria-label="breadcrumb">
//           <Link underline="hover" color="inherit" href="/">
//             Home
//           </Link>
//           <Link underline="hover" color="inherit" href="/">
//             Savings Goals
//           </Link>
//           <Link underline="hover" color="inherit" href="/">
//             <Typography sx={{ color: 'text.primary' }}>Breadcrumbs</Typography>
//           </Link>
//         </Breadcrumbs>
//         <div className="flex flex-row text-black justify-between my-10">
//           <p>Date</p>
//           <p>Amount</p>
//         </div>
//         {/* Transaction components go here */}
//         <section aria-label="transactions">
//           <TransactionHistoryView />
//         </section>
//       </main>
//     </div>
//   );
// }
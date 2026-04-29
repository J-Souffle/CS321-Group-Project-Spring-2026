"use client";

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import TransactionHistoryView from '../../../../components/TransactionHistory';
import { use } from 'react';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import InsertTransaction from '@/app/user-data/InsertTransaction';

export default function Home({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 font-sans ">
      <main className="flex flex-1 w-full flex-col max-w-4xl py-32 px-16 bg-zinc-50">
        <div className="flex flex-row justify-between my-2">
          <h1 className="text-5xl text-black">Contribution History</h1>

        </div>
        <Breadcrumbs className="mb-4" aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="../../">
            Savings Goals
          </Link>
          <Link underline="hover" color="inherit" href="../">
            Goal {id}
          </Link>
          <Link underline="hover" color="inherit" href={`../transaction-history/${id}`}>
            <Typography sx={{ color: 'text.primary' }}>Contribution History</Typography>
          </Link>
        </Breadcrumbs>

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
      <InsertTransaction goalId={Number(id)} />

       <Divider component="li" />

        <Link underline="none" href="/">
         <Button size="large">
           Back to Home
       </Button>
     </Link>
        <div className="flex flex-row text-black justify-between my-10">
          <p>Date</p>
          <p>Amount</p>
        </div>
        {/* Transaction components go here */}
        <section aria-label="transactions">
          <TransactionHistoryView id={Number(id)} />
        </section>
      </main>
    </div>
  );
}

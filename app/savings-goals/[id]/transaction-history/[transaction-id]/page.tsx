import * as React from 'react';
import Image from "next/image";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TransactionHistoryView from '../../../../components/TransactionHistory';
import { use } from 'react';
import GetContributionData from '../../../../user-data/GetContributionData';

export default function Home({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const goalContributions = GetContributionData(Number(id));

  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 font-sans ">
      <main className="flex flex-1 w-full flex-col max-w-4xl py-32 px-16 bg-zinc-50">
        <div className="flex flex-row justify-between my-2">
          <h1 className="text-5xl text-black">History</h1>

        </div>
        <Breadcrumbs className="mb-4" aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/">
            Savings Goals
          </Link>
          <Link underline="hover" color="inherit" href="/">
            <Typography sx={{ color: 'text.primary' }}>Breadcrumbs</Typography>
          </Link>
        </Breadcrumbs>
        <div className="flex flex-row text-black justify-between my-10">
          <p>Date</p>
          <p>Amount</p>
        </div>
        {/* Transaction components go here */}
        <section aria-label="transactions">
          <TransactionHistoryView />
        </section>
      </main>
    </div>
  );
}
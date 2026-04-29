//components for retrieving data from database
"use client";

import React, {useEffect, useState} from 'react';
import {supabase} from "../supabase-client";
import {Contribution} from '../components/TransactionHistory';

/* If added is true, that means the contribution was positive. */
interface ContributionData {
  id: number;
  Goal_id: number;
  Date: string;
  Amount: number;
  AddedOrSubtracted: boolean;
}

/* Gets all contributions associated with the goal ID
and puts them into an array. */
export default function GetGoalContributions(goalId: number) {
  const contributions: Contribution[] = ConvertData(goalId);
  return contributions;
}

/* Finds the fetched contributions related to our specified goal id.
Then, converts each of these to the type Contribution from TransactionHistory.tsx. */
function ConvertData(goalId: number) {
  const contributionData: ContributionData[] = GetAllContributions(goalId);
  let contributions: Contribution[] = [];

  for (const data of contributionData) {
    contributions.push(ContributionDataToContribution(data));
  }

  return contributions;
}

/* Converts one piece of fetched data
into our defined Contribution type from TransactionHistory.tsx. */
function ContributionDataToContribution(data: ContributionData) {
  let multiplier: number = 1;

  /* Multiplier is used to set the value to negative */
  if (data.AddedOrSubtracted == false) {
    multiplier = -1;
  }

  const contribution: Contribution = {
    id: data.id.toString(),
    date: data.Date,
    amount: data.Amount * multiplier
  }
  
  return contribution;
}

/* Fetches all contributions given a specific goal id. */
function GetAllContributions(goalId: number){

  const [contributions, setContributions] = useState<ContributionData[]>([]);

  const fetchContributions = async () => {
    const{error, data} = await supabase
      .from("Transaction_Table")
      .select("*")
      .eq("Goal_id", goalId)
      .order("id", {ascending: true});

      if(error){
        console.error("Error Reading Goal:", error.message);
        return;
      }

      setContributions(data)
  };

  useEffect(() => {
      fetchContributions()
    }, []);
  
  console.log(contributions)

  return contributions;
}


import React, {useEffect, useState} from 'react';
import {supabase} from "../supabase-client";

/* If added is true, that means the contribution was positive. */
export interface ContributionData {
  id: number;
  goal_id: number;
  date: string;
  amount: number;
  added: boolean;
}

/* TODO: only fetch goals matching goal id */
export function GetGoalContributions(goal_id: number){

  const [contributions, setContributions] = useState<ContributionData[]>([]);

  const fetchContributions = async () => {
    const{error, data} = await supabase
      .from("Transaction_Table")
      .select("*")
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

    return(contributions);
}
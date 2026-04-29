//components for retrieving data from database
"use client";

import React, {useEffect, useState} from 'react';
import {supabase} from "../supabase-client";

export interface Goal{
  id: number;
  Name: string;
  Goal_Amount: number;
  Description: string;
}

/* Fetches all goals from the database
and returns an array of those goals. */
export default function GetUserGoal(){

  const [goals, setGoals] = useState<Goal[]>([]);

  const fetchGoals = async () => {
    const{error, data} = await supabase
      .from("Savings_goals")
      .select("*")
      .order("id", {ascending: true});

      if(error){
        console.error("Error Reading Goal:", error.message);
        return;
      }

      setGoals(data)
  };

  useEffect(() => {
      fetchGoals()
    }, []);
  
    console.log(goals)

    return goals;
}
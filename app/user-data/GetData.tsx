//components for retrieving data from database
"use client";

import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button'
import Link from 'next/link'
import Typography from '@mui/material/Typography'
import TransactionHistory, { Contribution, SavingsGoal } from '../components/TransactionHistory';
import {supabase} from "../supabase-client";

export interface Goal{
  id: number;
  Name: string;
  Goal_Amount: number;
  Description: string;
}

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

    //display user goals
    return(
      <ul style={{width: "100%", listStyle: "none", padding: "3rem"}}>
        {goals.map((goal, key) => (
          <li
            key={key}
            style = {{
            border: "4px solid blue", 
            backgroundColor: "#add8e6",
            borderRadius: "4px",
            padding: "1rem", 
            marginBottom: "0.5rem",
          }}>
            <div>
              <Typography variant = 'h4' sx = {{fontweight: 800, mb: 0.5, color: '#191970'}}>
                {goal.Name}
              </Typography>
              <Typography variant = 'h6' sx = {{fontweight: 800, mb: 0.5, color: '#000000'}}>
                Financial Goal: ${goal.Goal_Amount}
              </Typography>
              <Typography variant = 'subtitle1' sx = {{fontweight: 800, mb: 0.5, color: '#000000'}}>
                Description: {goal.Description}
              </Typography>
              <Link href = "/savings-goals/1" passHref style={{textDecoration: 'none', width: '100%', maxWidth: '400px'}}>
                <Button variant="contained" size="small">
                  More Details
                </Button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    );
}
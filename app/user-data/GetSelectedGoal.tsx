//components for retrieving data from database
"use client";

import React, {useEffect, useState} from 'react';
import {supabase} from "../supabase-client";
import {Goal} from '../user-data/GetData';

/* Fetches the goal with the specified goal id. */
export default function GetSelectedGoal(goalId: number) {
    let goal = FetchGoal(goalId);
    if (goal) {
        if (!goal?.Description) {
            goal.Description = "No description";
        }
    }

    return goal;
}

function FetchGoal(goalId: number) {
const [goal, setGoals] = useState<Goal>();
    const fetchGoals = async () => {
    const{error, data} = await supabase
        .from("Savings_goals")
        .select("*")
        .eq("id", goalId)
        .single(); /* Allows us to fetch just ONE element from table. */

        if(error){
        console.error("Error Reading Goal:", error.message);
        return;
        }

        setGoals(data)
    };

    useEffect(() => {
        fetchGoals()
    }, []);
    
    console.log(goal)

    return goal;
}

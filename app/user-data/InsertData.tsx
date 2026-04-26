//Components for inserting data
"use client";

import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import TransactionHistory, {Contribution, SavingsGoal } from '../components/TransactionHistory';
import {supabase} from "../supabase-client";

export default function InsertUserGoal(){

    //handling data
    const[newGoal, setNewGoal] = useState({Name: "", Goal_Amount: "", Description: ""})
    
    const handleSubmit = async(e: any) => {
        e.preventDefault()
    
    const {error, data} = await supabase.from("Savings_goals").insert(newGoal).single();
    
    if(error){
        console.error("Error Adding Task:", error.message);
        return;
    }
        setNewGoal({Name: "", Goal_Amount: "", Description: ""})
    };

    return(
        //display data
        <form onSubmit ={handleSubmit} style={{marginBottom: "1rem "}}>
            <input
                type="text"
                placeholder="Insert Goal Name:" 
                onChange={(e) => setNewGoal((prev) => ({...prev, ...prev, Name: e.target.value}))}
                style={{border: '2px solid black', color: 'black', width: "100%", marginBottom: "0.5rem", padding: "0.5rem"}}
            />

            <input
                type="number"
                placeholder="Insert Goal Amount:"
                onChange={(e) => setNewGoal((prev) => ({...prev, ...prev, Goal_Amount: e.target.value}))}
                style={{border: '2px solid black', color: 'black', width: "100%", marginBottom: "0.5rem", padding: "0.5rem"}}
            />

            <textarea
                placeholder = "Insert Goal Description:" 
                onChange={(e) => setNewGoal((prev) => ({...prev, ...prev, Description: e.target.value}))}
                style={{border: '2px solid black', color: 'black', width: "100%", marginBottom: "0.5rem", padding: "0.5rem"}}
            />

            <button type = "submit" style={{border: '2px solid black', backgroundColor: "#4169e1" , padding: "0.5rem 1rem"}}>
                <Typography sx = {{fontweight: 800, mb: 0.5, color: '#000000'}}>Submit</Typography>
            </button>
        </form>
    );
}
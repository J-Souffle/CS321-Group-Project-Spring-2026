//Components for inserting data
"use client";

import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import TransactionHistory, {Contribution, SavingsGoal } from '../components/TransactionHistory';
import {supabase} from "../supabase-client";


export default function InsertTransaction(){

    //handling data
    const[newTransaction, setNewTransaction] = useState({Amount: 0, Date: "", Goal_id: "", AddedOrSubtracted: true})
    
    const handleSubmit = async(e: any) => {
        e.preventDefault()
    
    const {error, data} = await supabase.from("Transaction_Table").insert(newTransaction).single();
    
    if(error){
        console.error("Error Adding Task:", error.message);
        return;
    }
        setNewTransaction({Amount: 0, Date: "", Goal_id: "", AddedOrSubtracted: true})
    };

    return(
        //display data
        <form onSubmit ={handleSubmit} style={{marginBottom: "1rem "}}>
            <input
                type="number"
                value={newTransaction.Amount} 
                placeholder="Insert Amount:" 
                onChange={(e) => setNewTransaction((prev) => ({...prev, ...prev, ...prev, Amount: parseFloat(e.target.value)}))}
                style={{border: '2px solid black', color: 'black', width: "100%", marginBottom: "0.5rem", padding: "0.5rem"}}
            />

            <input
                type="date"
                value={newTransaction.Date}
                onChange={(e) => setNewTransaction((prev) => ({...prev, ...prev, ...prev, Date: e.target.value}))}
                style={{border: '2px solid black', color: 'black', width: "100%", marginBottom: "0.5rem", padding: "0.5rem"}}
            />

            <input
            type = "number"
            value={newTransaction.Goal_id} 
                placeholder = "Insert Goal ID:" 
                onChange={(e) => setNewTransaction((prev) => ({...prev, ...prev, ...prev, Goal_id: e.target.value}))}
                style={{border: '2px solid black', color: 'black', width: "100%", marginBottom: "0.5rem", padding: "0.5rem"}}
            />

            <select
                onChange={(e) => setNewTransaction((prev) => ({...prev, ...prev, ...prev, AddedOrSubtracted: e.target.value == "true"}))}
                style={{border: '2px solid black', color: 'black', width: "100%", marginBottom: "0.5rem", padding: "0.5rem"}}
            >
                <option value = "true" >add money</option>
                <option value = "false" >subtract money</option>

            </select>
            <button type = "submit" style={{border: '2px solid black', backgroundColor: "#4169e1" , padding: "0.5rem 1rem"}}>
                <Typography sx = {{fontweight: 800, mb: 0.5, color: '#000000'}}>Submit</Typography>
            </button>
        </form>
    );
}
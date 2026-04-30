//components for retrieving data from database
"use client";

import {Contribution} from '../components/TransactionHistory';
import GetGoalContributions from '../user-data/GetContributionData';

export default function CalculateMoneySaved(goalId: number) {
    const contributions: Contribution[] = GetGoalContributions(goalId);
    let total: number = 0;

    for (const contribution of contributions) {
        total += contribution.amount;
    }

    return total;
}
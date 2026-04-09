"use client";

import React, { useState } from 'react';
import { Box } from '@mui/material';
import GoalCard, { SubGoal } from '../components/GoalCard';

export default function Home() {
  const [goals, setGoals] = useState<SubGoal[]>([
    { id: 1, label: "Sub Goal 1", completed: true },
    { id: 2, label: "Sub Goal 2", completed: true },
    { id: 3, label: "Sub Goal 3", completed: true },
    { id: 4, label: "Sub Goal 4", completed: false },
    { id: 5, label: "Sub Goal 5", completed: false },
  ]);

  // handler to make the UI interactive
  const handleCheckbox = (id: string | number, checked: boolean) => {
    setGoals(prev => 
      prev.map(g => g.id === id ? { ...g, completed: checked } : g)
    );
  };

  // calculate progress percentage based on checkboxes
  const completedCount = goals.filter(g => g.completed).length;
  const progressPercent = Math.round((completedCount / goals.length) * 100);

  return (
    <Box sx={{ bgcolor: '#f4f4f6', minHeight: '100vh', py: 4 }}>
      <GoalCard 
        goalTitle="GOAL 1"
        breadcrumbs={["Home", "Savings Goals"]}
        percentage={progressPercent}
        description="(Insert Description Goal)"
        subGoals={goals}
        onCheckboxChange={handleCheckbox}
      />
    </Box>
  );
}
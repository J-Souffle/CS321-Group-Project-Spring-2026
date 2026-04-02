"use client";

import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Breadcrumbs, 
  Link, 
  LinearProgress, 
  Checkbox, 
  FormControlLabel, 
  FormGroup,
  Paper
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { FileText, Grid, Eye } from 'lucide-react';

export interface SubGoal {
  id: string | number;
  label: string;
  completed: boolean;
}

export interface GoalCardProps {
  goalTitle: string;
  breadcrumbs?: string[]; 
  percentage: number; 
  description?: string;
  subGoals: SubGoal[];
  onCheckboxChange?: (id: string | number, checked: boolean) => void;
}

const HeaderImage = styled(Box)(() => ({
  width: '100%',
  height: '140px',
  background: '#72bf6a',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}));

const StyledProgress = styled(LinearProgress)(() => ({
  height: 16,
  borderRadius: 8,
  backgroundColor: '#e0e0e0',
  '& .MuiLinearProgress-bar': {
    borderRadius: 8,
    backgroundColor: '#2e7d32', 
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  fontWeight: 700,
  fontSize: '1.2rem',
  marginBottom: theme.spacing(1),
}));

export default function GoalCard({
  goalTitle,
  breadcrumbs = [],
  percentage,
  description = "(No description provided)",
  subGoals,
  onCheckboxChange
}: GoalCardProps) {
  
  return (
    <Container 
      maxWidth="md" 
      disableGutters sx={{ 
        bgcolor: 'background.paper', 
        p: 0, 
        borderRadius: 2, 
        overflow: 'hidden',
        boxShadow: '0px 4px 20px rgba(0,0,0,0.05)'
      }}
    >
      {/* Banner */}
      <HeaderImage />

      <Box sx={{ p: { xs: 3, md: 5 } }}>
        {/* Header & Breadcrumbs */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 0.5, color: '#000000' }}>
            {goalTitle}
          </Typography>
          
          {breadcrumbs.length > 0 && (
            <Breadcrumbs separator="/" aria-label="breadcrumb" sx={{ justifyContent: 'center', display: 'flex' }}>
              {breadcrumbs.map((crumb, index) => (
                <Link key={index} underline="hover" color="inherit" href="#">
                  {crumb}
                </Link>
              ))}
              <Typography color="text.primary">{goalTitle}</Typography>
            </Breadcrumbs>
          )}
        </Box>

        {/* Progress Bar Area */}
        <Box sx={{ maxWidth: 280, mx: 'auto', textAlign: 'center', mb: 5, color: '#000000' }}>
          <StyledProgress variant="determinate" value={percentage} />
          <Typography variant="h6" sx={{ mt: 1, fontWeight: 700 }}>
            {percentage}% Complete
          </Typography>
        </Box>

        {/* Content Grid */}
        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: '1.2fr 1fr' }, 
            gap: 4 
          }}
        >

          <Box>
            {/* Description */}
            <Box sx={{ mb: 4, color: '#000000'}}>
              <SectionTitle>
                <FileText size={20} /> Description
              </SectionTitle>
              <Typography color="text.secondary" sx={{ ml: 3.5, color: '#000000' }}>
                {description}
              </Typography>
            </Box>

            {/* Checklist */}
            <Box sx={{ color: '#000000' }}>
              <SectionTitle>
                <Grid size={20} /> Criteria
              </SectionTitle>
              <FormGroup sx={{ ml: 2.5 }}>
                {subGoals.map((goal) => (
                  <FormControlLabel
                    key={goal.id}
                    control={
                      <Checkbox 
                        checked={goal.completed} 
                        onChange={(e) => onCheckboxChange?.(goal.id, e.target.checked)}
                        sx={{ '&.Mui-checked': { color: '#673ab7' } }} 
                      />
                    }
                    label={goal.label}
                    sx={{
                      '& .MuiTypography-root': {
                        fontSize: '0.95rem',
                        fontWeight: 500,
                        color: goal.completed ? 'text.secondary' : 'text.primary'
                      }
                    }}
                  />
                ))}
              </FormGroup>
            </Box>
          </Box>

          {/* Right Column (Desktop) */}
          <Box>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 3, 
                bgcolor: '#ece8f7', 
                borderRadius: 3,
                border: '1px solid #dcd6f3'
              }}
            >
              <SectionTitle sx={{ mb: 1.5 }}>
                <Eye size={20} /> See More
              </SectionTitle>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, ml: 3.5 }}>
                <Link 
                  href="#" 
                  underline="hover" 
                  sx={{ color: '#673ab7', fontWeight: 600, fontSize: '0.95rem' }}
                >
                  Contribution History
                </Link>
                <Link 
                  href="#" 
                  underline="hover" 
                  sx={{ color: '#673ab7', fontWeight: 600, fontSize: '0.95rem' }}
                >
                  Progress Timeline
                </Link>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
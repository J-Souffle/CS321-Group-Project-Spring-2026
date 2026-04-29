import GetUserGoal, {Goal} from '../user-data/GetData';
import Button from '@mui/material/Button'
import Link from 'next/link'
import Typography from '@mui/material/Typography'

export default function DisplaySavingsGoals() {

  const goals: Goal[] = GetUserGoal();

    return (
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
              
              {/* Stores information about the goal id in the URL for other pages to parse. */}
              <Link href = {`/savings-goals/${goal.id}`} passHref style={{textDecoration: 'none', width: '100%', maxWidth: '400px'}}>
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

import React, { useCallback } from 'react';
import { Box, Checkbox, FormControlLabel, Grid } from '@mui/material';

interface ActivitiesProps {
  activities: string[]
  setActivities: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function Activities({ activities, setActivities }: ActivitiesProps) {
  const handleCheckboxChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const activity = event.target.name

    if (event.target.checked) {
      setActivities([...activities, activity])
    } else {
      setActivities(activities.filter(item => item !== activity))
    }
  }, [activities, setActivities])

  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundImage: "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ justifyContent: "center" }} pr={5} pl={5}>
        {[
          "Sightseeing",
          "Local cuisine",
          "Shopping",
          "Cultural events",
          "Nightlife",
          "Photography",
          "Adventure sports",
          "Hiking",
          "Relaxing"
        ].map((activity) => (
          <Grid item xs={2} sm={4} md={4} key={activity}>
            <Box sx={{ background: "white", borderRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={activities.includes(activity)}
                    onChange={handleCheckboxChange}
                    name={activity}
                    color="primary"
                  />
                }
                label={activity}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

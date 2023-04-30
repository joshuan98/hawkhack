
import React from 'react';
import { Box } from '@mui/material';
import Map from './Map'
import { CountryType } from './Location';

interface PromptProps {
  duration: number | undefined
  location: CountryType | undefined
  activities: string[]
}

export default function Prompt({ duration, location, activities }: PromptProps) {
  const prompt = ""

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
      {location && <Map location={location} />}
      {/* {prompt && <Gpt prompt={prompt} />} */}
    </Box>
  );
}

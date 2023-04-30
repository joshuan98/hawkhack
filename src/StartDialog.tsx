
import React from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

interface StartDialogProps {
  handleNextClick: () => void
}

export default function StartDialog({ handleNextClick }: StartDialogProps) {
  return (
    <>
      <Dialog open={true} onClose={handleNextClick}>
        <DialogTitle>
          Welcome to TravelGPT
        </DialogTitle>
        <DialogContent>
          TravelGPT is the perfect tool for planning your next adventure. Simply input your desired duration, location, and activities, and our system will generate a unique itinerary just for you. Let us take care of the planning, so you can focus on making unforgettable memories.
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleNextClick}>
            Begin
          </Button>
        </DialogActions>
      </Dialog>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      </Box>
    </>
  );
}

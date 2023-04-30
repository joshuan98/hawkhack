import React, { useState, useEffect } from 'react';
import './App.css';
import Location, { CountryType } from './Location';
import Activities from './Activities';
import Duration from './Duration';
import Prompt from './Prompt';

import {
  Box, Dialog, DialogActions, DialogContent, DialogTitle
} from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import StartDialog from './StartDialog';

export enum States {
  Start = 0,
  Duration = 1,
  Location = 2,
  Activities = 3,
  Food = 4,
  Hotels = 5,
  Transport = 6,
  Prompt = 99
}

export default function App() {
  const [state, setState] = useState<States>(States.Start);

  const handlePrevClick = () => {
    if (state > 0) {
      setState(state - 1);
    }
  };

  const handleNextClick = () => {
    if (state < States.Transport) {
      setState(state + 1);
    }
  };

  const [startDate, setStartDate] = useState<Dayjs | null>(null)
  const [endDate, setEndDate] = useState<Dayjs | null>(null)
  const [duration, setDuration] = useState<number | undefined>(undefined)

  useEffect(() => {
    if (startDate && endDate) {
      const duration = dayjs(endDate).diff(dayjs(startDate), 'day') + 1;
      setDuration(duration)
    }
  }, [endDate, startDate])

  const [location, setLocation] = useState<CountryType | undefined>(undefined);
  const [activities, setActivities] = useState<string[]>([])

  return (
    <>
      <Box sx={{ height: '100vh', overflow: 'hidden' }}>
        <AppHeader setState={setState} startDate={startDate} endDate={endDate} duration={duration} location={location} activities={activities} />

        {state === States.Start ? <StartDialog handleNextClick={handleNextClick} /> : null}
        {state === States.Duration ? <Duration handleNextClick={handleNextClick} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} /> : null}
        {state === States.Location ? <Location handleNextClick={handleNextClick} location={location} setLocation={setLocation} /> : null}
        {state === States.Activities ? <Activities activities={activities} setActivities={setActivities} /> : null}
        {state === States.Prompt && duration && location && activities.length > 0 ? <Prompt duration={duration} location={location} activities={activities} /> : null}

        <AppFooter handlePrevClick={handlePrevClick} handleNextClick={handleNextClick} state={state} setState={setState} duration={duration} location={location} activities={activities} />
      </Box>
    </>
  );
}

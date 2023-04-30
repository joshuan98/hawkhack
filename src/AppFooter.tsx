import React, { useEffect, useState } from 'react';
import './App.css';
import { CountryType } from './Location';
import { Verified } from '@mui/icons-material';

import {
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { States } from './App';
import { useSpring, animated, config } from 'react-spring';

interface AppFooterProps {
  handlePrevClick: () => void
  handleNextClick: () => void
  state: States
  setState: React.Dispatch<React.SetStateAction<States>>
  duration: number | undefined
  location: CountryType | undefined
  activities: string[]
}

export default function AppHeader({ handlePrevClick, handleNextClick, state, setState, duration, location, activities }: AppFooterProps) {
  const animationProps = useSpring({
    transform: "translateX(0%)",
    opacity: 1,
    from: { transform: "translateX(-100%)", opacity: 0 },
    config: { ...config.default, duration: 500 },
    reset: true
  });

  return (
    <Drawer variant="permanent" anchor="bottom" >
      <Toolbar sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        bgcolor: 'black',
        color: 'white',
        width: '100%'
      }}>
        <Box />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {state !== States.Prompt ?
            (duration && location && activities.length > 0 ?
              (
                <animated.div style={animationProps}>
                  <Button variant='outlined' onClick={() => setState(States.Prompt)}>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                      TravelGPT
                    </Typography>
                    <Verified sx={{ color: 'blue', flexGrow: 1, pl: 1 }} />
                  </Button>
                </animated.div>
              ) : (
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  TravelGPT
                </Typography>
              )
            ) : (
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                TravelGPT
              </Typography>
            )}
        </Box>

        {state !== States.Prompt && (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit" onClick={handlePrevClick}>
              <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton color="inherit" onClick={handleNextClick}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        )}
      </Toolbar>
    </Drawer>
  );
}

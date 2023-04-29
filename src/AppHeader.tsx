import React from 'react';
import './App.css';
import { CountryType } from './Location';
import TimelapseIcon from '@mui/icons-material/Timelapse';

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Typography
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import { Dayjs } from 'dayjs';
import { States } from './App';

interface AppHeaderProps {
  setState: React.Dispatch<React.SetStateAction<States>>
  startDate: Dayjs | null
  endDate: Dayjs | null
  duration: number | undefined
  location: CountryType | undefined
  activities: string[]
}

export default function AppHeader({ setState, startDate, endDate, duration, location, activities }: AppHeaderProps) {
  const handleDrawerItemClick = (selectedState: States) => {
    setState(selectedState);
  };

  return (
    <Drawer variant="permanent" anchor="top">
      <List
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          bgcolor: 'black',
          color: 'white',
          pr: 2,
          pl: 2
        }}
      >
        <ListItem button onClick={() => handleDrawerItemClick(States.Duration)} sx={{
          maxWidth: '300px',
          display: 'flex',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        }}>
          <ListItemIcon>
            <TimelapseIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          {startDate && endDate && duration ? (
            <Typography>
              {"Duration: " + duration}
            </Typography>
          ) : (
            <Typography>
              Duration
            </Typography>
          )}
        </ListItem>
        <ListItem button onClick={() => handleDrawerItemClick(States.Location)} sx={{
          maxWidth: '300px',
          display: 'flex',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        }}>
          <ListItemIcon>
            <LocationOnIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          {location ? (
            <Typography>
              {"Location: " + location.label}
            </Typography>
          ) : (
            <Typography>
              Location
            </Typography>
          )}
        </ListItem>
        <ListItem
          button
          onClick={() => handleDrawerItemClick(States.Activities)}
          sx={{
            maxWidth: '300px',
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
          <ListItemIcon>
            <DirectionsBikeIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          {activities ? (
            <Typography
              component="div"
              noWrap
              sx={{
                textOverflow: 'ellipsis',
                maxWidth: '100%',
                overflow: 'hidden',
              }}
            >
              {`Activity: ${activities.join(', ')}`}
            </Typography>
          ) : (
            <Typography
              component="div"
              noWrap
              sx={{
                textOverflow: 'ellipsis',
                maxWidth: '100%',
                overflow: 'hidden',
              }}
            >
              Activity
            </Typography>
          )}
        </ListItem>
      </List>
    </Drawer>
  );
}

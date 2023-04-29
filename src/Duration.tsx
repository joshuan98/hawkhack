import React, { useCallback } from 'react';
import { Box } from '@mui/material';
import { Dayjs } from 'dayjs';
import { DateRange, StaticDateRangePicker } from '@mui/x-date-pickers-pro';
import { pickersLayoutClasses } from '@mui/x-date-pickers/PickersLayout';

interface DurationProps {
  handleNextClick: () => void
  startDate: Dayjs | null
  setStartDate: React.Dispatch<React.SetStateAction<Dayjs | null>>;
  endDate: Dayjs | null
  setEndDate: React.Dispatch<React.SetStateAction<Dayjs | null>>;
}

export default function Duration({ handleNextClick, startDate, setStartDate, endDate, setEndDate }: DurationProps) {
  const handleDateChange = useCallback((dateRange: DateRange<Dayjs>) => {
    setStartDate(dateRange[0]);
    setEndDate(dateRange[1]);

    if (dateRange[0] && dateRange[1]) {
      handleNextClick()
    }
  }, [handleNextClick, setEndDate, setStartDate])

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
      <StaticDateRangePicker
        value={[startDate, endDate]}
        onChange={handleDateChange}
        sx={{
          [`.${pickersLayoutClasses.contentWrapper}`]: {
            alignItems: 'center',
          },
          [`.${pickersLayoutClasses.actionBar}`]: {
            display: 'none',
          },
        }}
      />
    </Box>
  );
}

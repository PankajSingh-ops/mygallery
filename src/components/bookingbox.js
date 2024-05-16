import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Divider } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BookingBox = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const nightlyRate = 17550;
  const serviceFee = 12388;

  const calculateTotal = () => {
    const nights = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
    return nightlyRate * nights + serviceFee;
  };

  return (
    <Box sx={{ p: 3, border: '1px solid #ccc', borderRadius: 2, maxWidth: 400 }}>
      <Typography variant="h6" gutterBottom>Book your stay</Typography>
      <Box mt={2}>
        <Typography variant="h6">Select Dates</Typography>
        <Box display="flex" gap={2}>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            customInput={<TextField label="Check-in" />}
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            customInput={<TextField label="Check-out" />}
          />
        </Box>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box>
        <Typography variant="body1">₹{nightlyRate} x {Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1} nights: ₹{nightlyRate * (Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1)}</Typography>
        <Typography variant="body1">Service fee: ₹{serviceFee}</Typography>
        <Typography variant="h6" mt={2}>Total before taxes: ₹{calculateTotal()}</Typography>
      </Box>
      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Reserve
      </Button>
    </Box>
  );
};

export default BookingBox;

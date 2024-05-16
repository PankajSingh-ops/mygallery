import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Star, StarBorder } from '@mui/icons-material';

const RatingComponent = ({ rating, setRating }) => {
  return (
    <Box>
      {Array.from({ length: 5 }, (_, index) => (
        <IconButton key={index} onClick={() => setRating(index + 1)}>
          {index < rating ? <Star style={{ color: '#FFD700' }} /> : <StarBorder style={{ color: '#FFD700' }} />}
        </IconButton>
      ))}
    </Box>
  );
};

const TitleAndRating = ({ title }) => {
  const [rating, setRating] = useState(5);

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h4" gutterBottom>{title}</Typography>
      <RatingComponent rating={rating} setRating={setRating} />
    </Box>
  );
};

export default TitleAndRating;

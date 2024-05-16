import React from 'react';
import { Box , Container, Grid} from '@mui/material';
import ImageGallery from './components/Imagegaller';
import TitleAndRating from './components/RatingComponent';
import BookingBox from './components/bookingbox';
import ProfileCard from './components/Profilecard';
import Comments from './components/Comments';


const App = () => {
  const images = [
    '/1pic (1).jpg',
    '/1pic (2).jpg',
    '/1pic (3).jpg',
    '/1pic (4).jpg',
    '/1pic (5).jpg',
  ];

  const host = {
    image: '/host.jpg',
    name: 'Atul',
    role: 'Host',
    languages: ['English', 'Hindi', 'Punjabi'],
    responseRate: 100,
    responseTime: 'within an hour',
  };
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <ImageGallery images={images} />
        <TitleAndRating title="Entire home in Kotgarh, India" />
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <BookingBox />
          </Grid>
          <Grid item xs={12} md={4}>
            <ProfileCard host={host} />
          </Grid>
        </Grid>
        <Comments />
      </Box>
    </Container>
  );
};

export default App;
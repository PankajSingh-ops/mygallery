import React from 'react';
import { Box, Typography, Avatar, Button } from '@mui/material';

const ProfileCard = ({ host }) => {
  return (
    <Box sx={{ p: 3, border: '1px solid #ccc', borderRadius: 2, maxWidth: 400 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Avatar src={host.image} sx={{ mr: 2, width: 56, height: 56 }} />
        <Box>
          <Typography variant="h6">{host.name}</Typography>
          <Typography variant="body2" color="textSecondary">{host.role}</Typography>
        </Box>
      </Box>
      <Typography variant="body1" gutterBottom>Speaks: {host.languages.join(', ')}</Typography>
      <Typography variant="body1" gutterBottom>Response rate: {host.responseRate}%</Typography>
      <Typography variant="body1" gutterBottom>Responds within: {host.responseTime}</Typography>
      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Message Host
      </Button>
    </Box>
  );
};

export default ProfileCard;

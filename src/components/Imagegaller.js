import React, { useState } from 'react';
import { Box, Grid, Button, Dialog, DialogContent, DialogTitle } from '@mui/material';

const ImageGallery = ({ images }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <img src={images[0]} alt="Gallery Main" style={{ width: '100%', height: 'auto', borderRadius: 4 }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={1}>
            {images.slice(1).map((image, index) => (
              <Grid item xs={6} key={index}>
                <img src={image} alt={`Gallery ${index + 1}`} style={{ width: '100%', height: 'auto', borderRadius: 4 }} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 1 }}>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
              Show All Photos
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>All Photos</DialogTitle>
        <DialogContent>
          <Grid container spacing={1}>
            {images.map((image, index) => (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <img src={image} alt={`Gallery ${index}`} style={{ width: '100%', height: 'auto', borderRadius: 4 }} />
              </Grid>
            ))}
          </Grid>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ImageGallery;

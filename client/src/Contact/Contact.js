import React from "react";
import {Grid, TextField, Button, Box, Typography} from "@mui/material";
export default function Contact() {
  return (
   <Box sx={{flexGrow: 1, height: '100vh', padding: '2rem'}}>
    <Grid container spacing={2}>
        {/* Left Side: Contact Us Form */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{ marginTop: '1rem' }}
            >
              Submit
            </Button>
          </form>
        </Grid>

        {/* Right Side: Image or Call Support Banner */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f5f5f5',
          }}
        >
          <Box textAlign="center">
            <img
              src="https://via.placeholder.com/300" // Replace with your call support image
              alt="Call Support"
              style={{ width: '100%', maxWidth: '400px', marginBottom: '1rem' }}
            />
            <Typography variant="h5">
              Need Help? Call Our Support Team!
            </Typography>
          </Box>
        </Grid>
      </Grid>
   </Box>
  );
}

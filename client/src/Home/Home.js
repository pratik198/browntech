import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import Navbar from '../Navbar/Navbar';

const Home = () => {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh-30px', position: 'relative', overflow: 'hidden', backgroundColor:'#121B3C' , 
	paddingTop:{xs:'10px', md:'20px'}
	}}>
      {/* Background Video */}
      <Box
        component="video"
        src="https://videos.pexels.com/video-files/3141207/3141207-uhd_2560_1440_25fps.mp4" // Replace with the URL or path to your video
        autoPlay
        loop
        muted
		
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0, // Ensure the video stays behind everything else
        }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Grid
        container
        sx={{
			// backgroundColor:"red",
          minHeight: 'calc(100vh - 64px)', // Adjust if navbar height is different
          padding: { xs: '20px', md: '40px' },
          color: 'white', // Ensure text is readable on video background
          position: 'relative',
          zIndex: 1, // Ensure content stays above the video
        }}
        alignItems="center"
      >
        {/* Text Content */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: { xs: 'center', md: 'left' },
			// backgroundColor:"blue",
			marginLeft:{xs:'0px', md:'50px'}
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              mb: 1,
              fontSize: { xs: '2.1rem', md: '2.5rem' },
            }}
          >
            Welcome to BrownTech Developer
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 1,
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              color: 'white',
            }}
          >
            India's one of the best website providing companies
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              fontStyle: 'italic',
              fontSize: { xs: '1rem', md: '1.2rem' },
            }}
          >
            Your thought{' '}
            <span style={{ fontWeight: 'bold', color: 'primary.main' }}>Our creation</span>
          </Typography>
          <Button variant="outlined"  size="large"
		  sx={{color:"#EAEAEE"}} 
		  >
            Get Started
          </Button>
        </Grid>

        {/* Image */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            textAlign: 'center',
			// backgroundColor:"purple",
            mt: { xs: 4, md: 0 },
          }}
        >
          <Box
            component="img"
            // src="https://www.transparentpng.com/thumb/technology/technology-simple-17.png"
			src="https://flowndeveloper.com/wp-content/uploads/2022/11/ezgif.com-gif-maker.webp"
            alt="side-img"
            sx={{
              width: { xs: '70%', md: '100%' },
              maxWidth: '500px',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;

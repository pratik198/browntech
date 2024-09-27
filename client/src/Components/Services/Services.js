import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import portfolio from '../Images/ServicesImg/portfolio.webp';
import elearning from '../Images/ServicesImg/elearning.jpg';
import eCommerce from '../Images/ServicesImg/eCommerce.jpg';
import socialMedia from '../Images/ServicesImg/socialMedia.png';
import travelAndTourism from '../Images/ServicesImg/travelAndTourism.jpg';

// Array of service objects
const services = [
  {
    id: 1,
    title: 'Portfolios',
    description: 'This is a description for Service 1.',
    imageUrl: portfolio, 
  },
  {
    id: 2,
    title: 'Online learning platforms',
    description: 'This is a description for Service 2.',
    imageUrl: elearning, 
  },
  {
    id: 3,
    title: 'Social media platforms',
    description: 'This is a description for Service 3.',
    imageUrl: socialMedia, 
 
  },
  {
    id: 4,
    title: 'Travel and tourism',
    description: 'This is a description for Service 3.',
    imageUrl: travelAndTourism, 
  },
  {
    id: 5,
    title: 'eCommerce website',
    description: 'This is a description for Service 3.',
    imageUrl: eCommerce, 
  },
  
  // Add more services as needed
];

const Services = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',  // Background color of the entire service page
        color: 'white',            // Text color
        minHeight: '100vh',        // Ensure full height
        padding: 4,                // Padding around the content
        paddingTop: '14rem',       // Additional padding at the top
      }}
    >

      {/* Upper Box */}
      <Box
        sx={{
          mb: 4,   // Margin bottom to create space between upper and lower box
          textAlign: 'center',
        }}
      >
        {/* Heading */}
        <Typography variant="h4" >
          SERVICES
        </Typography>
        {/* Horizontal line */}
        <Box
          sx={{
            borderTop: '3px solid white',
            maxWidth: '60px',
            margin: '0 auto',
            mt: 3,
          }}
        />
      </Box>

      {/* Lower Box */}
      <Box 
        sx={{
          paddingLeft: {xs: 5, sm: 10, md: 22},
          paddingRight: {xs: 5, sm: 10, md: 22},
          
        }}
      >
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {services.map((service) => (
            <Grid
              item
              key={service.id}
              xs={12}     // On extra small screens, each service takes full width
              sm={6}      // On small screens, each service takes half width (2 columns)
              md={4}      // On medium screens and above, each service takes one-third width (3 columns)
              
            >
              {/* Each service box with image, title, and description */}
              <Box
                sx={{
                  padding: 2,
                  borderRadius: 2,
                  textAlign: 'center',
                  minHeight: '300px',       // Set a minimum height for consistency
                }}
              >
                {/* Image for each service */}
                <Box>
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    style={{ 
                      width: '150px',
                      height: '150px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>

                {/* Title (h4) in the second box */}
                <Box>
                  <Typography variant="h4" sx={{ mt: 3, fontSize: '1.25em'}}>
                    {service.title}
                  </Typography>
                </Box>

                {/* Description (p) in the third box */}
                <Box>
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    {service.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Services;

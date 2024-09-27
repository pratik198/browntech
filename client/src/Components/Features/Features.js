import React from 'react';
import { Box, Typography, Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import cleanCode from '../Images/FeaturesImg/cleanCode.png';
import Responsive from '../Images/FeaturesImg/Responsive.jpg';
import easyCustomization from '../Images/FeaturesImg/easyCustomization.jpg';
import support from '../Images/FeaturesImg/support.jpg';
import highQuality from '../Images/FeaturesImg/highQuality.jpg';
import sclableDesign from '../Images/FeaturesImg/sclableDesign.jpg';




const features = [
  {
    id: 1,
    title: "Clean Code",
    description: "Maintainability is key. Our clean code ensures your project is easy to read and modify, reducing technical debt and improving long-term maintainability.", 
    imageUrl: cleanCode, 
  },
  {
    id: 2,
    title: "100% Responsiveness",
    description: "Experience seamless usability on any device. Our designs are fully responsive, ensuring optimal performance on desktops, tablets, and smartphones.", 
    imageUrl: Responsive, 
  },
  {
    id: 3,
    title: "Easy Customization",
    description: "Adapt quickly to changing needs with ease. Our components are designed to be highly customizable, so you can tweak and modify them without hassle.", 
    imageUrl: easyCustomization, 
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "Get help whenever you need it. Our dedicated support team is available around the clock to assist with any issues or questions you might have.", 
    imageUrl: support, 
  },
  {
    id: 5,
    title: "High Quality",
    description: "Our top priority is quality. We use industry best practices and high standards to deliver products that are reliable, efficient, and robust.", 
    imageUrl: highQuality, 
  },
  {
    id: 6,
    title: "Scalable Design",
    description: "Grow without limits. Our scalable designs ensure that your project can expand and evolve as needed, handling increasing complexity and load.", 
    imageUrl: sclableDesign, 
  },
];

const Features = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box 
      sx={{
        backgroundColor: "white",
        color: "black",
        minHeight: "100vh",
        padding: 4,
        paddingTop: "7rem",
        mb: 4,
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
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          FEATURES
        </Typography>
        {/* Horizontal line */}
        <Box
          sx={{
            borderTop: '3px solid black',
            maxWidth: '60px',
            margin: '0 auto',
            mt: 3,
          }}
        />
      </Box>

      {/* Lower Box */}
      <Box
        sx={{
          padding: 5,
        }}
      >
        <Grid container spacing={4} justifyContent="center" alignContent="center" rowSpacing={0}>
          {features.map((feature, index) => {
            // Calculate the index within the current row
            const rowIndex = Math.floor(index / 3); // Determines the row number (0, 1, 2, ...)
            const columnIndex = index % 3; // Determines the position in the row (0, 1, 2)

            // Alternate the layout within each row:
            // If columnIndex is 0 or 2, show image on top; if columnIndex is 1, show image at the bottom.
            const showImageOnTop = isSmallScreen || columnIndex !== 1;

            return (
              <Grid 
                item
                key={feature.id}
                xs={12}  // On small screens, full width
                sm={6}   // On medium screens, two items per row
                md={4}   // On large screens, three items per row
                sx={{ mb: 0 }}  // Remove any margin bottom to eliminate row gaps
              >
                <Box
                  sx={{
                    padding: 0,
                    borderRadius: 2,
                    
                  }}
                >
                  {/* Conditional rendering based on layout */}
                  {showImageOnTop ? (
                    <>
                      {/* Image on top */}
                      <Box>
                        <img
                          src={feature.imageUrl}
                          alt={feature.title}
                          style={{ 
                            width: '100%',
                            height: '25rem',
                            // objectFit: 'cover',
                           }}
                        />
                      </Box>

                      {/* Title and description at the bottom */}
                      <Box 
                        sx={{
                          minHeight: "25rem",
                          display: "flex",
                          justifyContent: "center",
                          flexDirection: "column",
                          paddingLeft: 2,
                        }}
                      >
                        <Typography variant="h4" sx={{ fontSize: '1.5em', fontWeight:"bold" }}>
                          {feature.title}
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 3, color: 'rgb(68,68,68)', fontFamily: "Arial", fontWeight: "600"}}>
                          {feature.description}
                        </Typography>
                      </Box>
                    </>
                  ) : (
                    <>
                      {/* Title and description on top */}
                      <Box 
                        sx={{
                          minHeight: "25rem",
                          display: "flex",
                          justifyContent: "center",
                          flexDirection: "column",
                          paddingLeft: 2,
                        }}
                      >
                        <Typography variant="h4" sx={{ fontSize: '1.5em', fontWeight: "bold"}}>
                          {feature.title}
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 3, color: 'rgb(68,68,68)', fontFamily: "Arial" , fontWeight: "600"}}>
                          {feature.description}
                        </Typography>
                      </Box>

                      {/* Image at the bottom */}
                      <Box>
                        <img
                          src={feature.imageUrl}
                          alt={feature.title}
                          style={{ 
                            width: '100%',
                            height: '25rem',
                            // objectFit: 'cover',
                           }}
                        />
                      </Box>
                    </>
                  )}
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  )
}

export default Features;

import React from "react";
import { Grid, Typography, Box } from "@mui/material";

export default function WebDevelopment() {
  return (
    <Box sx={{ padding: 2, marginTop: "2rem" }}>
      <Grid container spacing={2}>
        {/* Left Div */}
        <Grid item xs={12} md={7}>
          <Typography variant="h3" gutterBottom>
            About Web Development
          </Typography>
          <Typography variant="h6">
            At BrownTech, we specialize in creating high-performance websites
            and web applications that drive digital success. Our web development
            services cover both front-end and back-end development, ensuring
            visually engaging and technically robust solutions.
          </Typography>
        </Grid>

        {/* Right Div */}
        <Grid item xs={12} md={5}>
          <Box
            component="img"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: 2,
            }}
            alt="Example Image"
            src="https://via.placeholder.com/400"
          />
        </Grid>
      </Grid>
      <Typography variant="h3">Technology we Cover</Typography>
    </Box>
  );
}

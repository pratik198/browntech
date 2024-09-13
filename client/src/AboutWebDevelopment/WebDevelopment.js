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
          <Typography variant="body1">
            This is the left div where you can place your text or other data.
            You can style this div however you like using Material-UI
            components.
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

import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import Reactjs from "../Images/TechnologyImg/Reactjs.jpg";
import nodejs from "../Images/TechnologyImg/nodejs.jpg";
import mongodb from "../Images/TechnologyImg/mongodb.jpg";

const technologyItems = [
  {
    image: Reactjs,
    title: "ReactJS",
    description:
      "A JavaScript library for building user interfaces, maintained by Facebook. It’s widely used for building single-page applications.",
  },
  {
    image: nodejs,
    title: "Node.js",
    description:
      "A JavaScript runtime built on Chrome's V8 engine, designed to build scalable network applications using event-driven, non-blocking I/O.",
  },
  {
    image: mongodb,
    title: "MongoDB",
    description:
      "A NoSQL database designed for scalability and flexibility. It stores data in JSON-like format and is great for handling large volumes of unstructured data.",
  },
  // Add more items as needed
];

const Technology = () => {
  return (
    <Box
      sx={{
        background: "black",
        color: "white",
        minHeight: "100vh",
        padding: "0 6rem",
        paddingTop: "7em",
      }}
    >
      {/* Upper box */}
      <Box
        sx={{
          mb: 4,
          textAlign: "center",
        }}
      >
        {/* Heading  */}
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          TECHNOLOGY
        </Typography>
        <Box
          sx={{
            borderTop: "3px solid white",
            maxWidth: "60px",
            margin: "0 auto",
            mt: 3,
          }}
        ></Box>
      </Box>

      {/* lower box  */}
      <Grid container spacing={9} justifyContent="center" alignItems="center">
        {technologyItems.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            {/* image  */}
            <Box
              component="img"
              src={item.image}
              alt={item.title}
              sx={{
                width: "100%",
                height: "18rem",
                objectFit: "cover", 
                borderRadius: 4,
                mb: 4,
              }}
            />
            {/* Title */}
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                mb: 2,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {item.title}
            </Typography>

            {/* Description */}
            <Typography variant="body1" sx={{ mb: 3, color: "#ccc" }}>
              {item.description}
            </Typography>

            {/* Read more button */}
            <Button
              variant="contained"
              endIcon={<ArrowForwardIos />}
              sx={{
                background: "none",
                padding: 0,
                color: "white",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Read More
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Technology;

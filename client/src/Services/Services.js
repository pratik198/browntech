import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";  
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LanguageIcon from "@mui/icons-material/Language";  
import ChatIcon from "@mui/icons-material/Chat";  
import FlightIcon from "@mui/icons-material/Flight";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";  

export default function Services() {
  const serviceData = [
    {
      title: "Web Design",
      img: "https://www.theai-panda.com/images/services/web_Dev-min.webp",
      description: `Incorporate the best website designs using high-end User Interaction technologies like Adobe XD, Figma, etc. Launch your own global identity with our experts, who carry great expertise in web design from scratch to end.`,
    },
    {
      title: "24*7 Support",
      img: "https://www.theai-panda.com/images/services/web_Dev-min.webp",
      description: `Our clients are our priority, and we are active across all communication channels to provide full customer support. Any problem in services like website designing and e-commerce development will be addressed with utmost priority. We have a 100% record in customer support.`,
    },
    {
      title: "Web Development",
      img: "https://www.theai-panda.com/images/services/web_Dev-min.webp",
      description: `We are the best web design company in India with highly experienced coders. Our way of working is very cool, and our potential to deliver top-notch websites is commendable. We focus on demanding technologies, frameworks, and tools.`,
    },
    {
      title: "100% Responsive Website",
      img: "https://www.theai-panda.com/images/services/web_Dev-min.webp",
      description: `Website responsiveness is a very critical parameter for the success of your business venture. Get your device responsive website design to reach your potential audience across all devices. Trending technologies and frameworks are available for 100% website responsiveness.`,
    },
    {
      title: "Logo Designs",
      img: "https://www.theai-panda.com/images/services/web_Dev-min.webp",
      description: `Our logo design service is for multiple industries, such as real estate, education, financial institutions, food, hospitality, information technology, fashion, and more. We also provide custom logo design services.`,
    },
    {
      title: "Data Science Services",
      img: "https://www.theai-panda.com/images/services/web_Dev-min.webp",
      description: `Unlock insights and drive decision-making with advanced analytics, predictive modeling, and data-driven strategies tailored for success.`,
    },
  ];

  const clientData = [
    { title: "Portfolio", description: "Description for Portfolio", icon: <WorkOutlineIcon /> },
    { title: "Online Learning Platforms", description: "Description for Learning Platforms", icon: <SchoolIcon /> },
    { title: "Social Media Platforms", description: "Description for Social Media", icon: <LanguageIcon /> },
    { title: "Real-time Chat Applications", description: "Description for Chat Apps", icon: <ChatIcon /> },
    { title: "Travel and Tourism Websites", description: "Description for Travel and Tourism", icon: <FlightIcon /> },
    { title: "E-commerce Applications", description: "Description for E-commerce", icon: <ShoppingCartIcon /> },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      {/* Heading */}
      <Typography variant="h4" align="center" gutterBottom>
        Our Services
      </Typography>

      {/* Responsive Grid */}
      <Grid container spacing={4}>
        {serviceData.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ mb: { xs: 4, md: 4 } }}>
            <Paper sx={{ padding: 2, textAlign: "center", height: "100%" }}>
              {/* Image */}
              <Box
                component="img"
                src={service.img}
                alt={service.title}
                sx={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  mb: 2,
                  borderRadius: "5px",
                }}
              />

              {/* Service Title */}
              <Typography variant="h5">{service.title}</Typography>

              {/* Description */}
              {service.description && (
                <Typography variant="h6" sx={{ mt: 1 }}>
                  {service.description}
                </Typography>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h3" align="center" gutterBottom marginTop="4rem">
        Serving our clients across the  <br />  diverse industries.
      </Typography>

      <Grid container spacing={4}>
        {clientData.map((client, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Paper
              sx={{
                padding: 2,
                backgroundColor: "rgb(20,20,20)",
                color: "white",
                borderRadius: "8px",
              }}
            >
              <Grid container alignItems="center" spacing={2}>
                {/* Left side: Icon */}
                <Grid item>
                  {client.icon}
                </Grid>

                {/* Right side: Client Heading and Description */}
                <Grid item xs>
                  <Typography variant="h5">{client.title}</Typography>
                  <Typography variant="h6" sx={{ mt: 1 }}>
                    {client.description}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

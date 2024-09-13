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
      title: "Custom Website Development",
      img: "https://www.theai-panda.com/images/services/web_Dev-min.webp",
      description: `We create fully custom websites from the ground up, ensuring that your brand stands out. Our designs are user-friendly, visually appealing, and optimized for performance.`,
    },
    {
      title: "24*7 Support",
      img: "https://www.theai-panda.com/images/services/web_Dev-min.webp",
      description: `At BrownTech, our 24/7 support ensures your business is always up and running. With real-time monitoring, rapid issue resolution, and multichannel communication, our team is available around the clock to provide assistance whenever you need it.`,
    },
    {
      title: "Web Development",
      img: "https://www.theai-panda.com/images/services/web_Dev-min.webp",
      description: `At BrownTech, we provide comprehensive web development services that deliver exceptional user experiences and robust functionality. Our team specializes in both front-end and back-end development, ensuring responsive, secure, and scalable websites tailored to your business needs.`,
    },
    {
      title: "100% Responsive Website",
      img: "https://www.theai-panda.com/images/services/web_Dev-min.webp",
      description: `Every website we build is mobile-first and fully responsive, ensuring an optimal user experience across all devices, from desktops to smartphones and tablets.`,
    },
    {
      title: "Logo Designs",
      img: "https://www.theai-panda.com/images/services/web_Dev-min.webp",
      description: `Our logo design service is for multiple industries, such as real estate, education, financial institutions, food, hospitality, information technology, fashion, and more. We also provide custom logo design services.`,
    },
  ];

  const clientData = [
    {
      title: "Portfolio",
      description:
        "Showcase your work with BrownTech's portfolio services. We create visually stunning, user-friendly portfolio websites that highlight your achievements, projects, and skills. Our customized designs ensure your portfolio stands out, engaging potential clients and employers while reflecting your unique brand and expertise. Whether you're an individual or a business, we help you make a lasting impression online.",
      icon: <WorkOutlineIcon />,
    },
    {
      title: "Online Learning Platforms",
      description:
        "We build dynamic, user-friendly online learning platforms designed to enhance educational experiences. Our platforms offer seamless navigation, interactive content delivery, and robust assessment tools, ensuring an engaging and efficient learning environment. With scalable solutions, we empower educators and learners to connect anytime, anywhere.",
      icon: <SchoolIcon />,
    },
    {
      title: "Social Media Platforms",
      description:
        "We design and develop innovative social media platforms that foster community engagement and connectivity. Our solutions focus on creating intuitive interfaces, scalable features, and secure environments, enabling users to interact, share, and connect seamlessly.",
      icon: <LanguageIcon />,
    },
    {
      title: "Real-time Chat Applications",
      description:
        "We create cutting-edge real-time chat applications that facilitate instant, seamless communication. Our solutions offer live messaging, user-friendly interfaces, and reliable performance, ensuring smooth and effective interactions for your users.",
      icon: <ChatIcon />,
    },
    {
      title: "Travel and Tourism Websites",
      description:
        "At BrownTech, we design intuitive travel and tourism applications that streamline trip planning and enhance travel experiences. Our solutions offer features like real-time booking, interactive maps, and personalized recommendations, making travel seamless and enjoyable.",
      icon: <FlightIcon />,
    },
    {
      title: "E-commerce Applications",
      description:
        "create powerful, secure, and scalable e-commerce platforms that drive online sales and enhance user experience. From seamless product browsing to secure checkout and payment integrations, our solutions are tailored to meet your business needs, helping you reach more customers and grow your brand.",
      icon: <ShoppingCartIcon />,
    },
  ];

  return (
    <Box sx={{ padding: 2, backgroundColor: "#091d36" }}>
      {/* Heading */}
      <Typography variant="h3" align="center" color="white" gutterBottom>
        Our Services
      </Typography>

      {/* Responsive Grid */}
      <Grid container spacing={4} justifyContent="center">
        {serviceData.map((service, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{ mb: { xs: 4, md: 4 }, position: "relative" }}
          >
            <Paper
              sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "8px",
                height: "100%",
                "&:hover .imageBox": {
                  transform: "translateY(-100%)",
                },
                "&:hover .titleOverlay": {
                  opacity: 0,
                },
                "&:hover .textOverlay": {
                  transform: "translateY(0)",
                  opacity: 1,
                },
              }}
            >
              {/* Image */}
              <Box
                className="imageBox"
                component="img"
                src={service.img}
                alt={service.title}
                sx={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  transition: "transform 0.5s ease-in-out",
                }}
              />

              {/* Title Overlay (Visible initially) */}
              <Box
                className="titleOverlay"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  transition: "opacity 0.5s ease-in-out",
                  zIndex: 1,
                }}
              >
                <Typography variant="h5">{service.title}</Typography>
              </Box>

              {/* Text Overlay on Hover */}
              <Box
                className="textOverlay"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#091d36",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1rem",
                  border: "1rem solid white",
                  textAlign: "center",
                  transform: "translateY(100%)",
                  transition:
                    "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
                  opacity: 0,
                  zIndex: 2,
                }}
              >
                <Typography variant="body1">{service.description}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Typography
        variant="h3"
        align="center"
        color="white"
        gutterBottom
        marginTop="4rem"
      >
        Serving our clients across the <br /> diverse industries.
      </Typography>

      <Grid container spacing={4}>
        {clientData.map((client, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Paper
              sx={{
                padding: 2,
                backgroundColor: "#152532",
                color: "white",
                borderRadius: "8px",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '20rem',
              }}
            >
              <Grid container alignItems="center" spacing={2}>
                {/* Left side: Icon */}
                <Grid
                  item
                  xs={4}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  {" "}
                  <Box sx={{ fontSize: "2rem" }}>{client.icon}</Box>{" "}
                  {/* Adjust icon size here */}
                </Grid>

                {/* Right side: Client Heading and Description */}
                <Grid item xs={8}>
                  <Typography variant="h5"textAlign={"center"}>{client.title}</Typography>
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

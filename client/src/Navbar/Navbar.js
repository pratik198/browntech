import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* AppBar with Glassmorphism Effect */}
      <AppBar
        position="sticky"
        sx={{
          width: "100%",
          height: "70px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //   backgroundColor: "rgba(210, 211, 219, 0.5)", // Transparent background with opacity
          backdropFilter: "blur(10px)", // Backdrop blur for glass effect
          backgroundColor: "rgba(18, 27, 60, 0.1)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Soft shadow to enhance the glass look
        }}
      >
        <Toolbar
          sx={{
            height: "100%",
            width: "90%",
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            borderRadius:"5px",
            backgroundColor: "rgba(171, 128, 250,0.2)", // Transparent background with opacity
            backdropFilter: "blur(10px)", // Backdrop blur for glass effect
            // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Soft shadow to enhance the glass look
            border: "1px solid rgba(255, 255, 255, 0.3)", // Subtle border for glass effect
          }}
        >
          {/* Left Side: Logo */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#fff" }}
          >
            LOGO
          </Typography>

          {/* Desktop Links */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Button sx={{ color: "#fff" }} href="#home">
              Home
            </Button>
            <Button sx={{ color: "#fff" }} href="#about">
              About Us
            </Button>
            <Button sx={{ color: "#fff" }} href="#services">
              Services
            </Button>
            <Button sx={{ color: "#fff" }} href="#contact">
              Contact Us
            </Button>
            <Button sx={{ color: "#fff" }} href="#support">
              Technical Support
            </Button>
            <Button variant="outlined" sx={{ color: "#fff" }} href="#support">
              Call : 9113147541
            </Button>
          </Box>

          {/* Hamburger Menu for Mobile */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "block", md: "none" }, color: "#fff" }}
            onClick={handleMobileMenuToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile links */}
      <Drawer
        anchor="left"
        open={isMobileMenuOpen}
        onClose={handleMobileMenuToggle}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "rgba(171, 128, 250,0.2)", // Slightly transparent background for the drawer
            backdropFilter: "blur(10px)", // Backdrop blur for glassmorphism
          },
        }}
      >
        <List sx={{ width: 250, color: "white" }}>
          <ListItem button href="#home">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button href="#about">
            <ListItemText primary="About Us" />
          </ListItem>
          <ListItem button href="#services">
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem button href="#contact">
            <ListItemText primary="Contact Us" />
          </ListItem>
          <ListItem button href="#support">
            <ListItemText primary="Technical Support" />
          </ListItem>
          <ListItem button href="#Call">
            <ListItemText primary="Call" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;

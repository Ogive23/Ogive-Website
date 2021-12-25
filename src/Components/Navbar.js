import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import logo from "./../Assets/Images/ogive_version_2.png";
import Slide from "@mui/material/Slide";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const Navbar = () => {
  const pages = ["Contact us", "Careers"];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [y, setY] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));
    return () => {
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [y]);

  const handleNavigation = (e) => {
    const window = e.currentTarget;
    setY(window.scrollY);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const trigger = useScrollTrigger({
    target: window ? window : undefined,
  });

  return (
    <>
      <CssBaseline />
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar
          sx={{
            mb: 2,
            background: y > 0 ? "white" : "transparent",
            position: "fixed",
            top: "0",
            right: "0",
            left: "0",
            zIndex: "1030",
          }}
          elevation={0}
        >
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex", height: "8vh" } }}
            >
              <img src={logo} alt="Ogive" />
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                placeContent: "end",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "#5AC3BD", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none", height: "8vh" },
              }}
            >
              <img src={logo} alt="Ogive" />
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                placeContent: "end",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ backgroundColor: "#5AC3BD" }}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      </Slide>
      {/* <Toolbar /> */}
    </>
  );
};

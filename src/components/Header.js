import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch } from "react-redux";
// import { useState } from "react";

const Header = () => {
  const dispatch = useDispatch();
  // const [anchorEl, setAnchorEl] = useState(null);

  const toggleDrawer = () => {
    dispatch({ type: "TOGGLE_DRAWER" });
  };

  // const handleMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  // };
  return (
    <AppBar position="static" color="default">
      <Toolbar style={{ justifyContent: "space-between" }}>
        {/* Only show menu button on mobile screens */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Full Name Dropdown */}

        {/* Notification Icon and Avatar */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

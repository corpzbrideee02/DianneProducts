import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LinkedCameraIcon from '@mui/icons-material/LinkedCamera';
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { setAnchorEl: null };
    this.handleMenu = this.handleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleMenu = (event) => {
    this.setState({ setAnchorEl: event.currentTarget });
  };
  handleClose = (event) => {
    this.setState({ setAnchorEl: null });
  };
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            
              <LinkedCameraIcon />
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                123Click{" "}
              </Typography>
           
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={this.state.setAnchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(this.state.setAnchorEl)}
                onClose={this.handleClose}
              >
                <Link to="/products" className="" style={{ textDecoration: "none" }}>
                  <MenuItem onClick={this.handleClose}>Products</MenuItem>
                </Link>
                <Link
                  to="/cart"
                  className=""
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  <MenuItem onClick={this.handleClose}>My Cart</MenuItem>{" "}
                </Link>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}

export default Navbar;

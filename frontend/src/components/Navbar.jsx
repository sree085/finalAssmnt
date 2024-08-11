//Write your missing code here

import {
    AppBar,
    Box,
    Button,
    IconButton,
    Toolbar,
    Typography,
  } from "@mui/material";
  import React from "react";
  import HomeIcon from '@mui/icons-material/Home';
  import AddIcon from '@mui/icons-material/Add';
  import { Link } from "react-router-dom";
  import AddBoxIcon from '@mui/icons-material/AddBox';

  
  const Navbar = () => {
    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="secondary">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                EmployeeApp
              </Typography>
              <Button>
                <Link style={{ textDecoration: "none", color: "white" }} to={"/"}>
                  <HomeIcon/>
                </Link>
              </Button>
              <Button>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={"/add"}
                >
                 <AddBoxIcon/>
                </Link>
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    );
  };
  
  export default Navbar;
  


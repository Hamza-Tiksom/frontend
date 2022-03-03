// import IconButton from '@mui/material/IconButton';
import Typography from "@mui/material/Typography";
// import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import * as React from "react";

export default function ButtonAppBar({name}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 2 }}>
            {name}
          </Typography>

          <Button
            variant="contained"
            component={Link}
            to={"/signin"}

          >
            Sign In
          </Button>
          <Button
            variant="contained"
            component={Link}
            to={"/signup"}

          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

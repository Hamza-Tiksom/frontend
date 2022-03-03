// import IconButton from '@mui/material/IconButton';
import Typography from "@mui/material/Typography";
// import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import * as React from "react";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 2 }}>
            Forum
          </Typography>

          <Button color="inherit">SignIn</Button>
          <Button color="inherit">SignUp</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

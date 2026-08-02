import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
          <PeopleIcon sx={{ mr: 1 }} />
          <Typography variant="h6" component="div">
            UserHub
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/users/search">
            Search
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

import { Link as RouterLink } from "react-router-dom";
import { Container, Typography, Button, Box } from "@mui/material";

function NotFound() {
  return (
    <Container maxWidth="sm">
      <Box textAlign="center" py={8}>
        <Typography variant="h3" component="h2" gutterBottom>
          Page Not Found
        </Typography>
        <Button variant="contained" color="primary" component={RouterLink} to="/">
          Go to Homepage
        </Button>
      </Box>
    </Container>
  );
}

export default NotFound;

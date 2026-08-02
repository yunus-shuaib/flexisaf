import { useContext } from "react";
import { UsersContext } from "./Context.jsx";
import ManImage from "../assets/man.png";
import WomanImage from "../assets/woman.png";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Box,
  CircularProgress
} from "@mui/material";

function Users() {
  const { users, isLoading } = useContext(UsersContext);
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Available Users
      </Typography>

      {users.length > 0 ? (
        <Grid container spacing={3}>
          {users.map((user) => (
            <Grid item xs={12} sm={6} md={4} key={user.id}>
              <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={user.gender === "male" ? ManImage : WomanImage}
                  alt={`${user.firstName} ${user.lastName}`}
                  sx={{ objectFit: "contain", pt: 2 }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {`${user.firstName} ${user.lastName}`}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Gender:</strong> {user.gender}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Age:</strong> {user.age}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Address:</strong> {`${user.address.address}, ${user.address.city}, ${user.address.state}`}
                  </Typography>
                  <Box mt={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={() => navigate(`/users/${user.id}`)}
                    >
                      View Profile
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h6" color="text.secondary">
          No users found
        </Typography>
      )}
    </Container>
  );
}

export default Users;

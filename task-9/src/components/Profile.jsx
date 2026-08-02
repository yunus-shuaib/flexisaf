import { useParams, Link as RouterLink } from "react-router-dom";
import { useEffect, useState } from "react";
import ManImage from "../assets/man.png";
import WomanImage from "../assets/woman.png";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  CircularProgress
} from "@mui/material";

function Profile() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    async function fetchUser() {
      try {
        setIsLoading(true);
        const response = await fetch(`https://dummyjson.com/users/${id}`);
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchUser();
  }, [id]);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      {user ? (
        <Card>
          <CardMedia
            component="img"
            height="200"
            image={user.gender === "male" ? ManImage : WomanImage}
            alt={`${user.firstName} ${user.lastName}`}
            sx={{ objectFit: "contain", pt: 2 }}
          />
          <CardContent>
            <Typography variant="h4" component="h2" gutterBottom align="center">
              {`${user.firstName} ${user.lastName}`}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Gender:</strong> {user.gender}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Age:</strong> {user.age}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Address:</strong> {`${user.address.address}, ${user.address.city}, ${user.address.state}`}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Job Title:</strong> {user.company?.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Email:</strong> {user.email}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Box textAlign="center" mt={4}>
          <Typography variant="h5" color="error" gutterBottom>
            User Not Found
          </Typography>
          <Button variant="outlined" component={RouterLink} to="/">
            Go to Homepage
          </Button>
        </Box>
      )}
    </Container>
  );
}

export default Profile;

import { useState, useContext } from "react";
import { UsersContext } from "./Context.jsx";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  CircularProgress
} from "@mui/material";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [notFound, setNotFound] = useState("");
  const { users, isLoading } = useContext(UsersContext);
  const navigate = useNavigate();

  function handleSearchBtn(e) {
    e.preventDefault();

    const query = searchValue.trim().toLowerCase();
    if (!query) return;

    const user = users.find((user) =>
      `${user.firstName} ${user.lastName}`.toLowerCase().includes(query)
    );

    if (user) {
      setNotFound("");
      navigate(`/users/${user.id}`);
    } else {
      setNotFound("User not Found");
    }
  }

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Box component="form" onSubmit={handleSearchBtn} sx={{ display: "flex", gap: 2, mb: 2 }}>
        <TextField
          fullWidth
          label="Search by name"
          variant="outlined"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
      </Box>

      {notFound && (
        <Typography variant="body1" color="error">
          {notFound}
        </Typography>
      )}
    </Container>
  );
}

export default Search;

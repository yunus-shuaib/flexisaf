# React Router DOM Guide for Task-10

This document explains how **React Router DOM** is utilized across this project to handle client-side routing, page navigation, dynamic route parameters, and 404 fallback handling.

---
## [Live](https://flexisaftask10.vercel.app/)

## Key Concepts Used

* **Dynamic Routing:** Fetching and displaying specific resources based on URL parameters (e.g., `/users/:id`).
* **Programmatic Navigation:** Using hooks (`useNavigate`) to trigger page redirects programmatically inside functions.
* **Declarative Navigation:** Using components (`<Link>`) or MUI components (`Button component={Link}`) for user-driven navigation.
* **Fallback Routing:** Catching unmatched paths and redirecting users to a custom 404 page.

---

## App Route Definitions

In your main entry routing file (usually `App.jsx`), routes are defined using `<BrowserRouter>`, `<Routes>`, and `<Route>`:

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import Profile from "./components/Profile";
import Search from "./components/Search";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element="{<Users" path="/"/>} />
        <Route element="{<Search" path="/users/search"/>} />
        <Route element="{<Profile" path="/users/:id"/>} />
        <Route element="{<NotFound" path="*"/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

```
## Detailed Breakdown by Component
### 1. Users.jsx (Programmatic Navigation)
In the user directory view, clicking **"View Profile"** dynamically navigates the user to their specific profile page using the useNavigate hook.
```jsx
import { useNavigate } from "react-router-dom";

function Users() {
  const navigate = useNavigate();

  // Inside your card / list map:
  return (
    <Button onClick="{()"> navigate(`/users/${user.id}`)}>
      View Profile
    </Button>
  );
}

```
 * **Why useNavigate?** It allows you to trigger navigation inside event handlers, callbacks, or conditional logic.
### 2. Profile.jsx (Dynamic URL Parameters)
The profile page uses the useParams hook to read the user :id from the URL, which is then used to fetch user details from the backend API (dummyjson.com/users/:id).
```jsx
import { useParams, Link } from "react-router-dom";

function Profile() {
  // Reads :id from /users/:id
  const { id } = useParams();

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(`[https://dummyjson.com/users/$](https://dummyjson.com/users/$){id}`);
      // ...
    }
    fetchUser();
  }, [id]);

  return (
    /* If user isn't found, render a link back to safety */
    <Link to="/">Go to homepage</Link>
  );
}

```
 * **Why useParams?** It turns route parameters into accessible JavaScript variables so you don't have to manually parse window.location.pathname.
### 3. Search.jsx (Search Logic & Navigation)
The search component searches the loaded user context array by name. Once a match is found, it uses useNavigate to redirect to that specific user's route.
```jsx
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();

  function handleSearchBtn(e) {
    e.preventDefault();
    const query = searchValue.trim().toLowerCase();

    const user = users.find(u => `${u.firstName} ${u.lastName}`.toLowerCase().includes(query));

    if (user) {
      navigate(`/users/${user.id}`); // Route redirect on match
    } else {
      setNotFound("User not Found");
    }
  }
}

```
### 4. NavBar.jsx (Header Navigation)
Uses <Link> (or MUI Button with component={Link}) to allow smooth single-page application (SPA) transitions without triggering a full page reload.
```jsx
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/users/search">Search</Link>
    </nav>
  );
}

```
### 5. NotFound.jsx (Catch-All Route)
Configured using path="*" in <Routes>. Any URL that doesn't match predefined routes (like /invalid/path) automatically renders this component.
```jsx
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <Link to="/">Go to homepage</Link>
    </div>
  );
}

```

# REST API with JSON Server (Mock Backend)

## Live link [live](https://flexisaftask4.vercel.app/)

This project demonstrates how to build and consume a simple REST API using **JSON Server** as a mock backend and a **React frontend**.

It is useful for learning API integration, CRUD operations, and frontend-backend communication without setting up a real database.

---

## What is JSON Server?

JSON Server allows you to create a fake REST API using a simple `db.json` file.

It automatically provides:
- GET (read data)
- POST (create data)
- PUT/PATCH (update data)
- DELETE (remove data)

---

## Project Structure

project/
│
├── backend
│   ├── db.json
│   ├── package.json
│
└── frontend/
    ├── src/
    ├── package.json

---

## Getting Started

### 1. Clone the project

## Backend Setup (JSON Server)

### Install dependencies

```bash
cd backend
npm install json-server
```

---

### Create `db.json`

```json
{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
  ]
}
```

---

### Start JSON Server

```bash
npm run json-server --watch db.json --port 3000
```

Your API will be available at:

http://localhost:3000

---

## API Endpoints

| Method | Endpoint       | Description        |
|--------|----------------|--------------------|
| GET    | /users         | Get all users      |
| GET    | /users/:id     | Get single user    |
| POST   | /users         | Create user        |
| PUT    | /users/:id     | Replace user       |
| PATCH  | /users/:id     | Update user        |
| DELETE | /users/:id     | Delete user        |

---

## Frontend Setup (React)

### Install dependencies

```bash
cd frontend
npm install
```

---

### Set API URL

Create a `.env` file:

VITE_API_URL=http://localhost:3000

---

### Example API call

```javascript
const API_URL = import.meta.env.VITE_API_URL;

fetch(`${API_URL}/users`)
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## CRUD Example

### Create User

```javascript
fetch(`${API_URL}/users`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Jane Doe",
    email: "jane@example.com"
  })
});
```

---

### Update User

```javascript
fetch(`${API_URL}/users/1`, {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Updated Name"
  })
});
```

---

### Delete User

```javascript
fetch(`${API_URL}/users/1`, {
  method: "DELETE"
});
```

---

## Deployment Idea

- Frontend → Vercel
- Backend → Render

Vercel Env:
VITE_API_URL=https://your-json-server.onrender.com

---

## Limitations

- JSON Server is for development only
- Data resets on restart
- Not production-ready

---

## Learning Outcome

- REST API basics
- CRUD operations
- Frontend-backend integration
- Environment variables
- Deployment flow

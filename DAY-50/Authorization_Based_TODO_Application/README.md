# Authorization-Based TODO Application

## Overview

This project is a secure backend TODO application developed using **Node.js**, **Express.js**, **Supabase (PostgreSQL)**, and **JWT-based Authorization**.  
The application demonstrates user authentication, protected routes, and user-specific TODO management following standard backend coding practices.

The goal of this project is to ensure **secure access control**, **data isolation**, and **clean architecture**.

---

## Objective

- Implement user authentication using JWT
- Protect API routes using authorization middleware
- Allow users to manage only their own TODO items
- Follow industry-standard backend development practices

---

## Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **Supabase** – PostgreSQL database
- **JWT (JSON Web Tokens)** – Authorization
- **bcrypt** – Password hashing
- **dotenv** – Environment variable management

---

## Project Structure

src/
├── config/
│ └── supabase.js
├── controllers/
│ ├── auth.controller.js
│ └── todo.controller.js
├── middleware/
│ └── auth.middleware.js
├── routes/
│ ├── auth.routes.js
│ └── todo.routes.js
├── app.js
└── server.js
.env.example
README.md

## API Endpoint Documentation

Base URL:
http://localhost:5000

### Authentication APIs

#### 1. Signup

- **Endpoint:** POST /signup
- **Description:** Register a new user

**Request Body:**

```json
{
  "name": "User Name",
  "email": "user@gmail.com",
  "password": "password123"
}
```

Response:

{
"message": "User registered successfully"
}

2. Login

Endpoint: POST /login

Description: Login and get JWT token (valid for 1 hour)

Request Body:

{
"email": "user@gmail.com",
"password": "password123"
}

Response:

{
"token": "JWT_TOKEN"
}

Authorization

All TODO APIs require this header:

Authorization: Bearer JWT_TOKEN

TODO APIs (Protected) 3. Create Todo

Endpoint: POST /todos

Request Body:

{
"title": "My first todo"
}

Response:

{
"title": "My first todo",
"completed": false
}

4. Get Todos

Endpoint: GET /todos

Response:

[
{
"title": "My first todo",
"completed": false
}
]

5. Update Todo

Endpoint: PUT /todos/:id

Request Body:

{
"title": "Updated todo",
"completed": true
}

Response:

{
"title": "Updated todo",
"completed": true
}

6. Delete Todo

Endpoint: DELETE /todos/:id

Response:

{
"message": "Todo deleted"
}

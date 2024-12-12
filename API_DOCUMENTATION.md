# Elimu Global Backend API Documentation

Base URL: `https://elimu-global-backend2.onrender.com`

## Table of Contents
1. [Categories](#categories)
2. [Courses](#courses)
3. [Students](#students)
4. [Instructors](#instructors)
5. [Admin](#admin)
6. [Authentication](#authentication)
7. [Users](#users)

## Authentication
Currently, the API doesn't require authentication. Authentication will be implemented in future updates.

---

## Categories

### Get All Categories
```http
GET /categories
```

**Response**
```json
[
  {
    "_id": "string",
    "name": "string",
    "description": "string",
    "image": "string",
    "createdAt": "date"
  }
]
```

### Get Single Category
```http
GET /categories/{categoryId}
```

**Response**
```json
{
  "_id": "string",
  "name": "string",
  "description": "string",
  "image": "string",
  "createdAt": "date"
}
```

### Create Category
```http
POST /categories
```

**Request Body**
```json
{
  "name": "string",
  "description": "string",
  "image": "string"
}
```

**Response**
```json
{
  "_id": "string",
  "name": "string",
  "description": "string",
  "image": "string",
  "createdAt": "date"
}
```

### Update Category
```http
PATCH /categories/{categoryId}
```

**Request Body**
```json
{
  "name": "string",
  "description": "string",
  "image": "string"
}
```

### Delete Category
```http
DELETE /categories/{categoryId}
```

---

## Courses

### Get All Courses
```http
GET /courses
```

**Response**
```json
[
  {
    "_id": "string",
    "title": "string",
    "description": "string",
    "category": "string",
    "instructor": "string",
    "createdAt": "date"
  }
]
```

### Get Single Course
```http
GET /courses/{courseId}
```

**Response**
```json
{
  "_id": "string",
  "title": "string",
  "description": "string",
  "category": "string",
  "instructor": "string",
  "createdAt": "date"
}
```

### Create Course
```http
POST /courses
```

**Request Body**
```json
{
  "title": "string",
  "description": "string",
  "category": "string",
  "instructor": "string"
}
```

### Update Course
```http
PATCH /courses/{courseId}
```

**Request Body**
```json
{
  "title": "string",
  "description": "string",
  "category": "string",
  "instructor": "string"
}
```

### Delete Course
```http
DELETE /courses/{courseId}
```

---

## Students

### Get All Students
```http
GET /students
```

**Response**
```json
[
  {
    "_id": "string",
    "name": "string",
    "email": "string",
    "createdAt": "date"
  }
]
```

### Get Single Student
```http
GET /students/{studentId}
```

**Response**
```json
{
  "_id": "string",
  "name": "string",
  "email": "string",
  "createdAt": "date"
}
```

### Create Student
```http
POST /students
```

**Request Body**
```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

### Update Student
```http
PATCH /students/{studentId}
```

**Request Body**
```json
{
  "name": "string",
  "email": "string"
}
```

### Delete Student
```http
DELETE /students/{studentId}
```

---

## Instructors

### Get All Instructors
```http
GET /instructors
```

**Response**
```json
[
  {
    "_id": "string",
    "name": "string",
    "email": "string",
    "createdAt": "date"
  }
]
```

### Get Single Instructor
```http
GET /instructors/{instructorId}
```

**Response**
```json
{
  "_id": "string",
  "name": "string",
  "email": "string",
  "createdAt": "date"
}
```

### Create Instructor
```http
POST /instructors
```

**Request Body**
```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

### Update Instructor
```http
PATCH /instructors/{instructorId}
```

**Request Body**
```json
{
  "name": "string",
  "email": "string"
}
```

### Delete Instructor
```http
DELETE /instructors/{instructorId}
```

---

## Admin

### Get All Admins
```http
GET /admins
```

**Response**
```json
[
  {
    "_id": "string",
    "name": "string",
    "email": "string",
    "createdAt": "date"
  }
]
```

### Get Single Admin
```http
GET /admins/{adminId}
```

**Response**
```json
{
  "_id": "string",
  "name": "string",
  "email": "string",
  "createdAt": "date"
}
```

### Create Admin
```http
POST /admins
```

**Request Body**
```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

### Update Admin
```http
PATCH /admins/{adminId}
```

**Request Body**
```json
{
  "name": "string",
  "email": "string"
}
```

### Delete Admin
```http
DELETE /admins/{adminId}
```

---

## Authentication Endpoints

### Signup
- **Endpoint**: `/auth/signup`
- **Method**: `POST`
- **Request Body**:
```json
{
  "email": "test@example.com",
  "password": "Test123!",
  "firstName": "Test",
  "lastName": "User",
  "role": "student"
}
```
- **Response**:
```json
{
  "success": true,
  "user": {
    "id": "675b0646014ae84c6b90780d",
    "email": "test@example.com",
    "firstName": "Test",
    "lastName": "User",
    "role": "student",
    "isApproved": true
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Login
- **Endpoint**: `/auth/login`
- **Method**: `POST`
- **Request Body**:
```json
{
  "email": "test@example.com",
  "password": "Test123!"
}
```
- **Response**:
```json
{
  "success": true,
  "user": {
    "id": "675b0646014ae84c6b90780d",
    "email": "test@example.com",
    "firstName": "Test",
    "lastName": "User",
    "role": "student",
    "isApproved": true
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

## Users

### Create User
- **Endpoint**: `/users`
- **Method**: `POST`
- **Request Body**: (similar structure as signup)
- **Response**: (user creation response)

### Get All Users
- **Endpoint**: `/users`
- **Method**: `GET`
- **Response**: (list of users)

### Get User by ID
- **Endpoint**: `/users/:id`
- **Method**: `GET`
- **Response**: (user details)

### Update User
- **Endpoint**: `/users/:id`
- **Method**: `PATCH`
- **Request Body**: (user details to update)
- **Response**: (updated user details)

### Delete User
- **Endpoint**: `/users/:id`
- **Method**: `DELETE`
- **Response**: (confirmation of deletion)

---

## Error Responses

### 400 Bad Request
```json
{
  "statusCode": 400,
  "message": ["error message"],
  "error": "Bad Request"
}
```

### 404 Not Found
```json
{
  "statusCode": 404,
  "message": "Resource not found",
  "error": "Not Found"
}
```

### 500 Internal Server Error
```json
{
  "statusCode": 500,
  "message": "Internal server error",
  "error": "Internal Server Error"
}
```

## Notes for Frontend Developers

1. All endpoints return JSON responses
2. All POST and PATCH requests should include the `Content-Type: application/json` header
3. Dates are returned in ISO 8601 format
4. IDs are MongoDB ObjectIds represented as strings
5. Error responses include appropriate HTTP status codes and error messages

## Rate Limiting

Currently, there are no rate limits implemented. This may change in future updates.

## Support

For any questions or issues, please contact the backend team.

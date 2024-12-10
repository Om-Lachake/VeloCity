
# User Authentication API

## Description
This API provides endpoints for user registration and login. It includes input validation, secure password handling, and JSON Web Token (JWT) generation for authentication.

---

## Endpoints

### 1. POST `/user/register`

#### Description
Allows users to register by providing their first name, last name (optional), email, and password. Validates the input data and creates a new user in the database.

#### Request Body
| Field               | Type   | Required | Validation Notes                                     |
|---------------------|--------|----------|-----------------------------------------------------|
| `fullname.firstname`| String | Yes      | Minimum length of 3 characters                     |
| `fullname.lastname` | String | No       | Minimum length of 3 characters (if provided)       |
| `email`             | String | Yes      | Must be a valid email address and unique           |
| `password`          | String | Yes      | Minimum length of 6 characters                     |

#### Example Request
```json
{
  "fullname": {
    "firstname": "Alice",
    "lastname": "Smith"
  },
  "email": "alice@example.com",
  "password": "password123"
}
```

#### Responses
- **Success Response**
  - **Status Code:** `201 Created`
  - **Content:**
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "user": {
        "_id": "647fca324f84b23d28e041ab",
        "fullname": {
          "firstname": "Alice",
          "lastname": "Smith"
        },
        "email": "alice@example.com"
      }
    }
    ```

- **Validation Error**
  - **Status Code:** `400 Bad Request`
  - **Content:**
    ```json
    {
      "errors": [
        {
          "msg": "First name must be at least 3 characters long",
          "param": "fullname.firstname",
          "location": "body"
        }
      ]
    }
    ```

- **User Already Exists**
  - **Status Code:** `400 Bad Request`
  - **Content:**
    ```json
    {
      "message": "User already exist"
    }
    ```

---

### 2. POST `/user/login`

#### Description
Allows existing users to log in by providing their email and password. Validates the credentials and returns a JWT upon successful authentication.

#### Request Body
| Field      | Type   | Required | Validation Notes                     |
|------------|--------|----------|---------------------------------------|
| `email`    | String | Yes      | Must be a valid email address         |
| `password` | String | Yes      | Minimum length of 6 characters        |

#### Example Request
```json
{
  "email": "alice@example.com",
  "password": "password123"
}
```

#### Responses
- **Success Response**
  - **Status Code:** `200 OK`
  - **Content:**
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "user": {
        "_id": "647fca324f84b23d28e041ab",
        "fullname": {
          "firstname": "Alice",
          "lastname": "Smith"
        },
        "email": "alice@example.com"
      }
    }
    ```

- **Invalid Credentials**
  - **Status Code:** `401 Unauthorized`
  - **Content:**
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

- **Validation Error**
  - **Status Code:** `400 Bad Request`
  - **Content:**
    ```json
    {
      "errors": [
        {
          "msg": "Invalid Email",
          "param": "email",
          "location": "body"
        }
      ]
    }
    ```

---

## Implementation Notes
1. Passwords are hashed using `bcrypt` before being stored in the database.
2. Tokens are generated using `jsonwebtoken` and returned as part of the response.
3. Validation is handled using `express-validator` to ensure proper input formats.

---

## Prerequisites
- Environment variable `JWT_SECRET` should be set for token generation.
- MongoDB must be running and accessible for user data storage.

---

## Author
This documentation describes the `/user/register` and `/user/login` endpoints of the project.


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

### 3. GET `/user/profile`

#### Description
Fetches the profile information of the currently authenticated user. The request must include a valid JWT token in the Authorization header or as a cookie.

#### Responses
- **Success Response**
  - **Status Code:** `200 OK`
  - **Content:**
    ```json
    {
      "_id": "647fca324f84b23d28e041ab",
      "fullname": {
        "firstname": "Alice",
        "lastname": "Smith"
      },
      "email": "alice@example.com"
    }
    ```

- **Unauthorized Access**
  - **Status Code:** `401 Unauthorized`
  - **Content:**
    ```json
    {
      "message": "Not authorized"
    }
    ```


### 4. GET `/user/logout`

#### Description
Logs the user out by clearing their JWT token from the cookies and adding the token to the blacklist to invalidate it.

#### Responses
- **Success Response**
  - **Status Code:** `200 OK`
  - **Content:**
    ```json
    {
      "message": "Logged out"
    }
    ```
---

## Implementation Notes
1. Passwords are hashed using `bcrypt` before being stored in the database.
2. Tokens are generated using `jsonwebtoken` and returned as part of the response.
3. Validation is handled using `express-validator` to ensure proper input formats.
4. The authUser middleware checks if the user is authenticated before accessing protected routes like /user/profile 
   and /user/logout.

---

## Prerequisites
- Environment variable `JWT_SECRET` should be set for token generation.
- MongoDB must be running and accessible for user data storage.

---

## Author
This documentation describes the /user/register, /user/login, /user/profile, and /user/logout endpoints of the project. 

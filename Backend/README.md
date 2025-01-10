# Stride - Backend

## API Documentation

### POST /users/register

#### Description

This endpoint is used to register a new user.

#### Request Body

The request body must be a JSON object with the following fields:

- `fullname.firstname` (string, required): The first name of the user. Must be at least 3 characters long.
- `fullname.lastname` (string, optional): The last name of the user. Must be at least 3 characters long if provided.
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

#### Example Request

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Responses

- **201 Created**

  - **Description**: User successfully registered.
  - **Body**: A JSON object containing the authentication token and user details.
  - **Example**:
    ```json
    {
      "token": "your_jwt_token",
      "user": {
        "_id": "user_id",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com"
      }
    }
    ```

- **400 Bad Request**

  - **Description**: Validation errors or missing required fields.
  - **Body**: A JSON object containing the validation errors.
  - **Example**:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid Email",
          "param": "email",
          "location": "body"
        },
        {
          "msg": "Firstname must be at least 3 characters long",
          "param": "fullname.firstname",
          "location": "body"
        },
        {
          "msg": "Password must be atleast 6 characters long",
          "param": "password",
          "location": "body"
        }
      ]
    }
    ```

- **500 Internal Server Error**
  - **Description**: An error occurred on the server.
  - **Body**: A JSON object containing the error message.
  - **Example**:
    ```json
    {
      "error": "Internal Server Error"
    }
    ```

### POST /users/login

#### Description

This endpoint is used to log in an existing user.

#### Request Body

The request body must be a JSON object with the following fields:

- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

#### Example Request

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Responses

- **200 OK**

  - **Description**: User successfully logged in.
  - **Body**: A JSON object containing the authentication token and user details.
  - **Example**:
    ```json
    {
      "token": "your_jwt_token",
      "user": {
        "_id": "user_id",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com"
      }
    }
    ```

- **400 Bad Request**

  - **Description**: Validation errors or missing required fields.
  - **Body**: A JSON object containing the validation errors.
  - **Example**:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid Email",
          "param": "email",
          "location": "body"
        },
        {
          "msg": "Password must be atleast 6 characters long",
          "param": "password",
          "location": "body"
        }
      ]
    }
    ```

- **401 Unauthorized**

  - **Description**: Invalid email or password.
  - **Body**: A JSON object containing the error message.
  - **Example**:
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

- **500 Internal Server Error**
  - **Description**: An error occurred on the server.
  - **Body**: A JSON object containing the error message.
  - **Example**:
    ```json
    {
      "error": "Internal Server Error"
    }
    ```

### GET /users/profile

#### Description

This endpoint is used to get the profile of the authenticated user.

#### Request Headers

- `Authorization` (string, required): The JWT token of the authenticated user.

#### Example Request

```http
GET /users/profile HTTP/1.1
Host: example.com
Authorization: Bearer your_jwt_token
```

#### Responses

- **200 OK**

  - **Description**: User profile retrieved successfully.
  - **Body**: A JSON object containing the user details.
  - **Example**:
    ```json
    {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
    ```

- **401 Unauthorized**

  - **Description**: Missing or invalid token.
  - **Body**: A JSON object containing the error message.
  - **Example**:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

- **500 Internal Server Error**
  - **Description**: An error occurred on the server.
  - **Body**: A JSON object containing the error message.
  - **Example**:
    ```json
    {
      "error": "Internal Server Error"
    }
    ```

### GET /users/logout

#### Description

This endpoint is used to log out the authenticated user.

#### Request Headers

- `Authorization` (string, required): The JWT token of the authenticated user.

#### Example Request

```http
GET /users/logout HTTP/1.1
Host: example.com
Authorization: Bearer your_jwt_token
```

#### Responses

- **200 OK**

  - **Description**: User successfully logged out and token is blacklisted.
  - **Body**: A JSON object containing a success message.
  - **Example**:
    ```json
    {
      "message": "Successfully logged out"
    }
    ```

- **401 Unauthorized**

  - **Description**: Missing or invalid token.
  - **Body**: A JSON object containing the error message.
  - **Example**:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

- **500 Internal Server Error**
  - **Description**: An error occurred on the server.
  - **Body**: A JSON object containing the error message.
  - **Example**:
    ```json
    {
      "error": "Internal Server Error"
    }
    ```

### POST /captains/register

#### Description

This endpoint is used to register a new captain.

#### Request Body

The request body must be a JSON object with the following fields:

- `fullname.firstname` (string, required): The first name of the captain. Must be at least 3 characters long.
- `fullname.lastname` (string, optional): The last name of the captain.
- `email` (string, required): The email address of the captain. Must be a valid email format.
- `password` (string, required): The password for the captain. Must be at least 6 characters long.
- `vehicle.color` (string, required): The color of the vehicle. Must be at least 3 characters long.
- `vehicle.plate` (string, required): The plate number of the vehicle. Must be at least 3 characters long.
- `vehicle.capacity` (number, required): The capacity of the vehicle. Must be at least 1.
- `vehicle.vehicleType` (string, required): The type of the vehicle. Must be one of 'car', 'motorcycle', or 'auto'.

#### Example Request

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Responses

- **201 Created**

  - **Description**: Captain successfully registered.
  - **Body**: A JSON object containing the authentication token and captain details.
  - **Example**:
    ```json
    {
      "token": "your_jwt_token",
      "captain": {
        "_id": "captain_id",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "vehicle": {
          "color": "red",
          "plate": "ABC123",
          "capacity": 4,
          "vehicleType": "car"
        }
      }
    }
    ```

- **400 Bad Request**

  - **Description**: Validation errors or missing required fields.
  - **Body**: A JSON object containing the validation errors.
  - **Example**:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid Email",
          "param": "email",
          "location": "body"
        },
        {
          "msg": "Firstname must be at least 3 characters long",
          "param": "fullname.firstname",
          "location": "body"
        },
        {
          "msg": "Password must be atleast 6 characters long",
          "param": "password",
          "location": "body"
        },
        {
          "msg": "Color must be atleast 3 characters long",
          "param": "vehicle.color",
          "location": "body"
        },
        {
          "msg": "Plate must be atleast 3 characters long",
          "param": "vehicle.plate",
          "location": "body"
        },
        {
          "msg": "Capacity must be atleast 1",
          "param": "vehicle.capacity",
          "location": "body"
        },
        {
          "msg": "VehicleType must be one of 'car', 'motorcycle', or 'auto'",
          "param": "vehicle.vehicleType",
          "location": "body"
        }
      ]
    }
    ```

- **500 Internal Server Error**
  - **Description**: An error occurred on the server.
  - **Body**: A JSON object containing the error message.
  - **Example**:
    ```json
    {
      "error": "Internal Server Error"
    }
    ```

### POST /captains/login

#### Description

This endpoint is used to log in an existing captain.

#### Request Body

The request body must be a JSON object with the following fields:

- `email` (string, required): The email address of the captain. Must be a valid email format.
- `password` (string, required): The password for the captain. Must be at least 6 characters long.

#### Example Request

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Responses

- **200 OK**

  - **Description**: Captain successfully logged in.
  - **Body**: A JSON object containing the authentication token and captain details.
  - **Example**:
    ```json
    {
      "token": "your_jwt_token",
      "captain": {
        "_id": "captain_id",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "vehicle": {
          "color": "red",
          "plate": "ABC123",
          "capacity": 4,
          "vehicleType": "car"
        }
      }
    }
    ```

- **400 Bad Request**

  - **Description**: Validation errors or missing required fields.
  - **Body**: A JSON object containing the validation errors.
  - **Example**:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid Email",
          "param": "email",
          "location": "body"
        },
        {
          "msg": "Password must be atleast 6 characters long",
          "param": "password",
          "location": "body"
        }
      ]
    }
    ```

- **401 Unauthorized**

  - **Description**: Invalid email or password.
  - **Body**: A JSON object containing the error message.
  - **Example**:
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

- **500 Internal Server Error**
  - **Description**: An error occurred on the server.
  - **Body**: A JSON object containing the error message.
  - **Example**:
    ```json
    {
      "error": "Internal Server Error"
    }
    ```

### GET /captains/profile

#### Description

This endpoint is used to get the profile of the authenticated captain.

#### Request Headers

- `Authorization` (string, required): The JWT token of the authenticated captain.

#### Example Request

```http
GET /captains/profile HTTP/1.1
Host: example.com
Authorization: Bearer your_jwt_token
```

#### Responses

- **200 OK**

  - **Description**: Captain profile retrieved successfully.
  - **Body**: A JSON object containing the captain details.
  - **Example**:
    ```json
    {
      "captain": {
        "_id": "captain_id",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "vehicle": {
          "color": "red",
          "plate": "ABC123",
          "capacity": 4,
          "vehicleType": "car"
        }
      }
    }
    ```

- **401 Unauthorized**

  - **Description**: Missing or invalid token.
  - **Body**: A JSON object containing the error message.
  - **Example**:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

- **500 Internal Server Error**
  - **Description**: An error occurred on the server.
  - **Body**: A JSON object containing the error message.
  - **Example**:
    ```json
    {
      "error": "Internal Server Error"
    }
    ```

### GET /captains/logout

#### Description

This endpoint is used to log out the authenticated captain.

#### Request Headers

- `Authorization` (string, required): The JWT token of the authenticated captain.

#### Example Request

```http
GET /captains/logout HTTP/1.1
Host: example.com
Authorization: Bearer your_jwt_token
```

#### Responses

- **200 OK**

  - **Description**: Captain successfully logged out.
  - **Body**: A JSON object containing a success message.
  - **Example**:
    ```json
    {
      "message": "Logout Successful"
    }
    ```

- **401 Unauthorized**

  - **Description**: Missing or invalid token.
  - **Body**: A JSON object containing the error message.
  - **Example**:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

- **500 Internal Server Error**
  - **Description**: An error occurred on the server.
  - **Body**: A JSON object containing the error message.
  - **Example**:
    ```json
    {
      "error": "Internal Server Error"
    }
    ```

### POST /rides/create

#### Description

This endpoint is used to create a new ride.

#### Request Body

The request body must be a JSON object with the following fields:

- `pickup` (string, required): The pickup address. Must be at least 3 characters long.
- `destination` (string, required): The destination address. Must be at least 3 characters long.
- `vehicleType` (string, required): The type of the vehicle. Must be one of 'auto', 'car', or 'motorcycle'.

#### Example Request

```json
{
  "pickup": "123 Main St",
  "destination": "456 Elm St",
  "vehicleType": "car"
}
```

#### Responses

- **201 Created**

  - **Description**: Ride successfully created.
  - **Body**: A JSON object containing the ride details.
  - **Example**:
    ```json
    {
      "_id": "ride_id",
      "user": "user_id",
      "pickup": "123 Main St",
      "destination": "456 Elm St",
      "vehicleType": "car",
      "fare": 100,
      "otp": "123456"
    }
    ```

- **400 Bad Request**

  - **Description**: Validation errors or missing required fields.
  - **Body**: A JSON object containing the validation errors.
  - **Example**:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid pickup address",
          "param": "pickup",
          "location": "body"
        },
        {
          "msg": "Invalid destination address",
          "param": "destination",
          "location": "body"
        },
        {
          "msg": "Invalid vehicle type",
          "param": "vehicleType",
          "location": "body"
        }
      ]
    }
    ```

- **500 Internal Server Error**
  - **Description**: An error occurred on the server.
  - **Body**: A JSON object containing the error message.
  - **Example**:
    ```json
    {
      "message": "Internal Server Error"
    }
    ```

### GET /rides/get-fare

#### Description

This endpoint is used to get the fare for a ride.

#### Request Query Parameters

The request must include the following query parameters:

- `pickup` (string, required): The pickup address. Must be at least 3 characters long.
- `destination` (string, required): The destination address. Must be at least 3 characters long.

#### Example Request

```http
GET /rides/get-fare?pickup=123%20Main%20St&destination=456%20Elm%20St HTTP/1.1
Host: example.com
Authorization: Bearer your_jwt_token
```

#### Responses

- **200 OK**

  - **Description**: Fare successfully retrieved.
  - **Body**: A JSON object containing the fare details.
  - **Example**:
    ```json
    {
      "auto": 50,
      "car": 100,
      "motorcycle": 30
    }
    ```

- **400 Bad Request**

  - **Description**: Validation errors or missing required fields.
  - **Body**: A JSON object containing the validation errors.
  - **Example**:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid pickup address",
          "param": "pickup",
          "location": "query"
        },
        {
          "msg": "Invalid destination address",
          "param": "destination",
          "location": "query"
        }
      ]
    }
    ```

- **500 Internal Server Error**
  - **Description**: An error occurred on the server.
  - **Body**: A JSON object containing the error message.
  - **Example**:
    ```json
    {
      "message": "Internal Server Error"
    }
    ```

## Environment Variables

- `PORT`: The port on which the server runs.
- `DB_CONNECT`: The MongoDB connection string.
- `JWT_SECRET`: The secret key for JWT token generation.

# Travel Diary Platform API

This API allows users to create, read, update, and delete travel entries.

## Setup and Usage

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up environment variables.
4. Start the server using `npm start`.

## API Endpoints

### User

- **POST /api/v1/users/register**: Register a new user.
- **POST /api/v1/users/login**: Log in a user.
- **GET /api/v1/users/profile**: Get the current user's profile.
- **PUT /api/v1/users/profile**: Update the current user's profile.

### Diary Entry

- **POST /api/v1/diaryEntry/**: Create a new diary entry.
- **GET /api/v1/diaryEntry/**: Get all diary entries for the current user.
- **GET /api/v1/diaryEntry/:id**: Get a specific diary entry.
- **PUT /api/v1/diaryEntry/:id**: Update a specific diary entry.
- **DELETE /api/v1/diaryEntry/:id**: Delete a specific diary entry.

## OOP Concepts

This project demonstrates the use of Object-Oriented Programming (OOP) concepts, including:

- **Encapsulation**: Database interactions are encapsulated within class methods.
- **Inheritance**: User and Diary Entry classes inherit from a common base class.
- **Polymorphism**: User and Diary Entry classes have similar methods but different implementations.
- **Abstraction**: User and Diary Entry classes hide implementation details and expose a simple interface.

## Deployment

The API is deployed to Render. You can access it at **https://swivl-assignment-u557.onrender.com**

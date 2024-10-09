# Environment Configuration

This project uses environment variables for configuration. There are two separate `.env` files: one for the frontend and one for the backend.

## Frontend Configuration

The frontend `.env` file is located at `frontend/.env` and contains the following variable:

- `REACT_APP_API_URL`: The URL of the backend API that the frontend will communicate with.

## Backend Configuration

The backend `.env` file is located at `backend/.env` and contains the following variables:

- `PORT`: The port number on which the backend server will run.
- `MONGODB_URI`: The connection string for the MongoDB database.
- `JWT_SECRET`: The secret key used for JSON Web Token encryption.
- `NODE_ENV`: The current environment (e.g., "development", "production").

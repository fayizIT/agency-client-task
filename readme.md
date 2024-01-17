# Agency and Client Management API

This project implements a REST API for managing Agencies and Clients, with token-based authentication and adherence to REST standards. It provides functionalities for creating agencies and clients, updating client details, and retrieving information about the top client(s) with the maximum total bill.

## Tech Stack

- Node.js
- Express
- MongoDB
The `package.json` file you provided lists the dependencies and devDependencies for your Node.js project. Here's a breakdown of the packages mentioned:

### Dependencies:

- **body-parser:** Middleware to parse incoming request bodies in a middleware before your handlers, available under the `req.body` property.
- **cookie-parser:** Parse Cookie header and populate `req.cookies` with an object keyed by the cookie names.
- **cors:** Middleware to enable Cross-Origin Resource Sharing (CORS) for your Express app.
- **dotenv:** Loads environment variables from a `.env` file into `process.env`.
- **express:** Web application framework for Node.js.
- **express-async-handler:** A utility to handle exceptions inside of async express routes and pass them to your express error handlers.
- **jsonwebtoken:** JSON Web Token implementation for Node.js.
- **mongoose:** MongoDB object modeling tool designed to work in an asynchronous environment.

### DevDependencies:

- **nodemon:** Utility that monitors for changes in files and automatically restarts the server.


## Installation


git clone https://github.com/your-username/agency-client-api.git
cd Node Js -Project
npm install
cd backend

## Running the Application
npm run dev



## Configuration

Create a `.env` file in the root of the project with the following content:

PORT
MONGODB_URI
SECRET_KEY
NODE_ENV




The application will be accessible at [http://localhost:5000](http://localhost:5000).

## API Endpoints

### 1st API - Create an Agency and Client

```bash
curl -X POST http://localhost:5000/api/agency/create -H "Content-Type: application/json" -d '{"agencyData": {...}, "clientData": {...}}'
```

### 2nd API - Update a Client

```bash
curl -X PUT http://localhost:5000/api/client/update/CLIENT_ID -H "Content-Type: application/json" -d '{"Name": "Updated Client Name", "Email": "updatedclient@example.com", ...}'
```

### 3rd API - Get Top Client Details

```bash
curl http://localhost:5000/api/client/top-client-details
```

## Testing with Postman

1. Open [Postman](https://www.postman.com/downloads/).
2. Import the provided `agency-client-api.postman_collection.json` file.
3. Use the imported requests to test each API endpoint.

## Deployment

Deploy the application to a test server ( AWS) along with the database for testing.


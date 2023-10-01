# CSV Parser

## Overview

This is a coding challenge I got for an interview where I was asked to develop a CSV parser. I was given a deadline of three days to complete it.

## Requiremets

For the API:

- It must run using NodeJS 14 and must not depend on globally installed libraries, environment variables, or configurations specific to any operating system.
- It must be written in JavaScript, not using Babel, TypeScript, Dart, Elm, etc.
- It must use Express, Chai and Mocha.

For the frontend:

- It must use functional programming and React hooks.
- It must run using NodeJS 16 and must not depend on globally installed libraries, environment variables, or configurations specific to any operating system.
- The code must be written in JavaScript (ES6+) and should not use the following tools: TypeScript, Dart, Elm, or similar.
- Must not use meta-frameworks such as Next.js or Vite.
- It must use Webpack and React Bootstrap.

## Running the App

### Using Docker

In the project's root directory, execute the following command:

```
docker-compose up --build
```

The frontend will be available at http://localhost:8080, and the backend at http://localhost:3000.

### Without Docker

To start the API, execute the following commands in the ./api directory using Node 14:

```
npm install
npm run start
```

The backend will run at http://localhost:3000.

To start the frontend, execute the following commands in the project's root directory using Node 16:

```
npm install
npm run build
npm run start
```

## Endpoints

- [GET] /ping endpoint is used to test if the API has started correctly.

```
curl --location 'localhost:3000/ping'
```

- [GET] /files/data retrieves a formatted and validated list of CSV files and their content. To retrieve a specific file, you can add the fileName query parameter to the endpoint.

```
curl --location 'localhost:3000/files/data'
```

- [GET] /files/list retrieves a list of CSV files.

```
curl --location 'localhost:3000/files/list'
```

## Tests

To run the unit tests, execute the following command from the ./api directory:

```
npm run test
```

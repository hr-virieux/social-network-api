# Social Network API

## Description

The Social Network API is a backend system designed to simulate the basic functionalities of a social networking platform. Built with Node.js, Express, and MongoDB, this API allows users to manage their profiles, thoughts, friendships, and reactions. It is designed to handle large amounts of unstructured data, making it an excellent tool for developers looking to implement or test social networking features.

## Installation

### Prerequisites
- Node.js installed on your machine
- MongoDB installed and running on your local environment
- Basic understanding of RESTful APIs and MongoDB operations

### Setup Instructions
- Clone this repository to your local machine
- Navigate to the repository directory and install dependencies:
  ```
  npm install
  ```
- Ensure MongoDB is running on your local system

## Usage
- Start the server with:
  ```
  npm start
  ```
- Once the server is running, you can use a platform like Insomnia to send requests to the API endpoints.
- Video walkthrough is available [here](https://vimeo.com/939597899?share=copy).

## API Endpoints

### Users
- **GET /api/users** - Retrieve all users
- **POST /api/users** - Create a new user
- **GET /api/users/:userId** - Retrieve a user by ID
- **PUT /api/users/:userId** - Update a user by ID
- **DELETE /api/users/:userId** - Delete a user by ID
- **POST /api/users/:userId/friends/:friendId** - Add a friend
- **DELETE /api/users/:userId/friends/:friendId** - Remove a friend

### Thoughts
- **GET /api/thoughts** - Retrieve all thoughts
- **POST /api/thoughts** - Create a new thought
- **GET /api/thoughts/:thoughtId** - Retrieve a thought by ID
- **PUT /api/thoughts/:thoughtId** - Update a thought by ID
- **DELETE /api/thoughts/:thoughtId** - Delete a thought by ID
- **POST /api/thoughts/:thoughtId/reactions** - Add a reaction to a thought
- **DELETE /api/thoughts/:thoughtId/reactions/:reactionId** - Remove a reaction from a thought

## Features
- CRUD operations for user and thought management.
- Ability to add and remove friends.
- Ability to post and react to thoughts.
- Utilises MongoDB, a NoSQL database, to store data for high performance and flexibility.
- Express.js as the backend framework for building the API routes.

## License
This project is released under the MIT License. See the LICENSE file in the repository for more details.

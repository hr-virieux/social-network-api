# E-commerce Back End

## Description

The E-commerce Back End is developed to provide a robust back-end system for internet retail businesses, enabling them to manage their products, categories, and tags efficiently. This system utilises Express.js API with Sequelize to interact with a MySQL database, offering streamlined operations for modern e-commerce platforms.

## Installation

### Prerequisites
- Node.js installed on your machine
- MySQL installed and active in your local environment
- A MySQL user with necessary privileges

### Setup Instructions
- Clone this repository to your local machine.
- Navigate to the repository directory and install dependencies:
  ```
  npm install
  ```
- Log into your MySQL shell and create a new database:
  ```
  CREATE DATABASE ecommerce_db;
  ```
- Execute the schema and seed scripts to populate your database:
  ```
  SOURCE C:/path_to_directory/db/schema.sql;
  SOURCE C:/path_to_directory/db/seeds.sql;
  ```

## Usage
- Start the server with:
  ```
  npm start
  ```
- Video walkthrough is available [here](https://vimeo.com/939597899?share=copy).

## Features

- Manage product inventory through CRUD operations on categories, products, and tags.
- Database integration via Sequelize ORM for efficient data handling and queries.
- Automated creation and seeding of database tables and test data on server start..

## License
This project is released under the MIT License. For more details, see the LICENSE file in the repository.

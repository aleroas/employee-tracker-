# Employee Tracker

## Description

The Employee Tracker is a command-line application that allows you to manage an organization's employee database. It uses PostgreSQL as the database and Node.js for the backend logic. The application provides functionality to view, add, update, and delete departments, roles, and employees.

## Features

- View all departments
- View all roles
- View all employees
- Add a new department
- Add a new role
- Add a new employee
- Update an employee's role
- Delete a department (with dependency check)
- Delete a role (with dependency check)
- View employees by manager

## Installation

1. **Clone the repository**

   ```sh
   git clone https://github.com/aleroas/employee-tracker.git
   cd employee-tracker

## Video screenshoot:
![Screen Shot 2024-07-18 at 8 38 47 PM](https://github.com/user-attachments/assets/bac131f6-eead-41ad-b638-a665ad2b1741)


## Install dependencies:
npm install

## Setup the database

- Make sure PostgreSQL is installed and running.

DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=employee_tracker

-Create the database and tables by running the SQL commands from the schema.sql file:

psql -U your_db_user -d employee_tracker -f db/schema.sql

psql -U your_db_user -d employee_tracker -f db/seed.sql

## Usage
- npm start

## Project Structure
- index.js - The main entry point for the application.
- db/queries.js - Contains functions for querying the database.
- db/pool.js - Handles the database connection pool.
- db/schema.sql - SQL script to create the database schema.
- db/seed.sql - SQL script to insert initial data into the database.
- .env - Contains environment variables for database connection.
- package.json - Contains project metadata and dependencies.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements
- PostgreSQL - Database management system.
- Node.js - JavaScript runtime used for server-side logic.
- pg - Node.js client for PostgreSQL.

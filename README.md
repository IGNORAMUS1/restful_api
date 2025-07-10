Here’s a well-structured `README.md` file for your Node.js and PostgreSQL-based REST API project:

---

````markdown
# User Management REST API with Node.js and PostgreSQL

This is a simple RESTful API built using **Node.js**, **Express**, and **PostgreSQL** for basic user management operations such as create, read, update, and delete (CRUD).

## Features

- Connects to a local PostgreSQL database.
- Supports the following endpoints:
  - `GET /getAllUsers` – Fetch all users
  - `GET /getUser/:id` – Fetch a single user by ID
  - `POST /createUser` – Create a new user
  - `PUT /updateUser/:id` – Update a user's last name
  - `DELETE /deleteUser/:id` – Delete a user by ID

## Prerequisites

- Node.js and npm installed
- PostgreSQL installed and running
- A `.env` file with your PostgreSQL password

## Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd <your-project-directory>
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Setup environment variables**

   Create a `.env` file in the root directory:

   ```
   password=your_postgres_password
   ```

4. **Setup PostgreSQL database**

   Make sure your PostgreSQL service is running and you've created a database named `test`.

   Example SQL:

   ```sql
   CREATE DATABASE test;

   \c test

   CREATE TABLE person (
       id SERIAL PRIMARY KEY,
       first_name VARCHAR(50),
       last_name VARCHAR(50),
       email VARCHAR(100),
       gender VARCHAR(10),
       date_of_birth DATE,
       country_of_birth VARCHAR(50)
   );
   ```

## Usage

Start the server:

```bash
node index.js
```

The server will start on `http://localhost:5000`.

## API Endpoints

### `GET /getAllUsers`

Fetch all users from the `person` table.

### `GET /getUser/:id`

Fetch a single user by ID.

### `POST /createUser`

Create a new user.

**Request Body (JSON):**

```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com",
  "gender": "Male",
  "date_of_birth": "1990-01-01",
  "country_of_birth": "USA"
}
```

### `PUT /updateUser/:id`

Update the `last_name` of a user by ID.

**Request Body (JSON):**

```json
{
  "last_name": "Smith"
}
```

### `DELETE /deleteUser/:id`

Delete a user by ID.

## Notes

* Ensure your PostgreSQL credentials and connection details are correct in the `.env` file.
* Basic error handling is implemented. You may want to improve this for production use.
* This project uses raw SQL queries via the `pg` package. Consider using an ORM like Sequelize for more complex applications.

## License

MIT

```

---

Let me know if you’d like to add usage examples via `curl` or `Postman`, or if you want a Docker setup section.
```

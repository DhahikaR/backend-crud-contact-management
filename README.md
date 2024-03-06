# Node Js CRUD Backend

A REST API using nodejs and express. This code use Prisma ORM to manage MySQL database. With all the Routes Create User, Login a user, Delete User, CRUD on Contacts, Crud on Addresses.

Use three collections, for users, contacts, and addresses. Authorization uses a Token generate from UUID.

Uses middleware for verify token, and handle error response. You can be found in [middlewares](https://github.com/DhahikaR/backend-crud-contact-management/tree/main/src/middleware)

This API used [Joi](https://www.npmjs.com/package/joi) for validation, and [Jest](https://www.npmjs.com/package/jest) for Unit Test.

## Features

- REST API
- Token Authorization
- CRUD Operations
- MySQL Database
- Validation
- Unit Test

## Run Locally

Clone the project

```bash
  git clone https://github.com/DhahikaR/backend-crud-contact-management.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node src/main
```

## API Reference

Here are some main api usage, more details can be found in [routes] https://github.com/DhahikaR/backend-crud-contact-management/tree/main/src/route

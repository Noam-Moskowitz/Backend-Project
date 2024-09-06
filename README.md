
---

# Backend Project

## Summary

This project is built using **Node.js** and serves as a database for both **users** and **cards**. It allows you to perform all **CRUD (Create, Read, Update, Delete)** actions on both users and cards, provided you have the correct authorizations.

### Key Features:
- **JWT (JSON Web Token)** is used to manage authorizations, ensuring secure access to routes.
- **Morgan** is utilized to log every request, including the URL, HTTP method, status, response time, and duration. These logs are color-coded with **Chalk** for better readability.
- **MongoDB** is the database solution used, with **Mongoose** for schema management.
- **Bcrypt** is used to hash passwords securely.
- **Joi** is used for input validation, ensuring that data passed to the API meets specified criteria.
- **Dotenv** is used to manage environment variables.

---

## Tech Stack

- **JavaScript** for all code.
- **Node.js** for the backend server.
- **MongoDB** as the NoSQL database.
- **Mongoose** as the ODM (Object Data Modeling) library for MongoDB.
- **JWT** for authorization and authentication.
- **Bcrypt** for password hashing.
- **Joi** for schema validation.
- **Morgan** for logging HTTP requests.
- **Chalk** for color-coded logs.
- **Dotenv** for managing environment variables.

---

## File Structure

The project is organized into the following structure:

```
.
├── index.js
├── initialDataService.js
├── cards/
│   ├── cardModel.js
│   ├── cardController.js
│   ├── cardService.js
│   └── cardMiddleware.js
├── const/
│   ├── cardsData.js
│   └── usersData.js
├── public/
│   └── error-page.html
├── routers/
│   ├── cardsRouter.js
│   ├── authRouter.js
│   ├── usersRouter.js
│   └── mainRouter.js
├── token/
│   └── tokenMiddleware.js
├── users/
│   ├── userModel.js
│   ├── userController.js
│   ├── userService.js
│   └── userMiddleware.js
└── utils/
    ├── utils1.js
    └── utils2.js
```

### Explanation of Folders:
- **index.js**: The main entry point for the server.
- **initialDataService.js**: Loads initial data for the application.
- **cards/**: Contains everything related to managing cards (model, controller, service, and middleware).
- **const/**: Contains initial data files for cards and users.
- **public/**: Contains static assets, such as `error-page.html`.
- **routers/**: 
  - `cardsRouter.js`: Manages routes related to card operations.
  - `authRouter.js`: Manages routes related to user authentication and login.
  - `usersRouter.js`: Manages routes for CRUD operations on users.
  - `mainRouter.js`: Exports all route files for use in the main application.
- **token/**: Contains token-related middleware for handling JWT.
- **users/**: Same structure as `cards/` but for user management.
- **utils/**: Contains utility functions used across the project.

---

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. View the API documentation:
   [Postman Documentation](https://documenter.getpostman.com/view/36795401/2sAXjQ3WYU)

---

## Logging and Monitoring

- **Morgan** logs all HTTP requests, including the method, URL, status code, and duration.
- **Chalk** color codes the logs to distinguish between different types of messages (success, error, etc.).

---

## Conclusion

This project provides a full backend service for managing users and cards, equipped with secure JWT-based authorization, logging with Morgan, and proper validation using Joi. It’s structured to be scalable and maintainable, making it suitable for both development and production environments.

---

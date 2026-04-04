---
title: Express.js Interview Q&A
description: Commonly asked Express.js interview questions and answers.
---

# Express.js Interview Questions

### 1. What is Express.js?

Express.js is a fast, unopinionated, minimalist web framework for Node.js. It simplifies the development process by providing an easy-to-use interface for creating APIs and web applications.

### 2. How do you fetch parameters from a URL in Express?

You can use `req.params`, `req.query`, and `req.body`.

- **`req.params`**: Used for route parameters (e.g., `/user/:id`).
- **`req.query`**: Used for query string parameters (e.g., `/search?q=node`).
- **`req.body`**: Used for retrieving data sent via POST or PUT requests (requires a body-parsing middleware like `express.json()`).

### 3. What is Middleware in Express?

Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application’s request-response cycle. They can execute code, modify request/response objects, end the cycle, or call the next middleware.

### 4. What is the use of `next()` in Express?

The `next()` function is used to pass control to the next middleware function in the stack. If it's not called, the request will hang at the current middleware and will not reach the route handler.

### 5. What are the built-in middleware functions in Express?

Starting from version 4.x, Express has following built-in middleware:

- **`express.json()`**: Parses incoming requests with JSON payloads.
- **`express.urlencoded()`**: Parses incoming requests with URL-encoded payloads.
- **`express.static()`**: Serves static files like images, CSS, and JS.

### 6. How do you handle 404 errors in Express?

You handles 404s by adding a middleware function at the end of the middleware/route stack (after all other `app.use()` and `app.METHOD()` calls).

```javascript
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});
```

### 7. What is Error-Handling Middleware?

Error-handling middleware is defined with **four** arguments instead of three: `(err, req, res, next)`.

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

### 8. How do you serve static files?

By using the `express.static()` middleware.

```javascript
app.use(express.static("public"));
```

### 9. What is Routing and how does it work?

Routing refers to determining how an application responds to a client request to a particular endpoint (e.g., `/users`) and a specific HTTP method (`GET`, `POST`, etc.).

```javascript
app.get("/", (req, res) => {
  res.send("Hello World!");
});
```

### 10. How can you scale an Express application?

- Use the **Cluster module** to spread the load across CPU cores.
- Using **PM2** for process management and monitoring.
- Implement **Horizontal Scaling** by adding more server instances behind a Load Balancer.
- Optimize database queries and implement caching with **Redis**.

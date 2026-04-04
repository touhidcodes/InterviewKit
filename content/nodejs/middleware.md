---
title: Express.js Middleware
description: Understanding the building blocks of Express applications.
---

# Express.js Middleware

Middleware functions are the fundamental building blocks of **Express.js**. They have access to the **request (req)** object, the **response (res)** object, and the **next middleware** function in the application's request-response cycle.

---

## 1. What does it do?

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware in the stack (`next()`).

---

## 2. Types of Middleware

Express supports several types of middleware based on how they are used:

### Application-Level Middleware:

Bound to an instance of the app object by using `app.use()` and `app.METHOD()`.

```javascript
app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});
```

### Router-Level Middleware:

Bound to an instance of `express.Router()`.

```javascript
const router = express.Router();
router.use((req, res, next) => {
  next();
});
```

### Built-In Middleware:

These are part of Express itself since version 4.x.

- `express.static`: Serves static assets such as HTML files, images, etc.
- `express.json`: Parses incoming requests with JSON payloads.
- `express.urlencoded`: Parses incoming requests with URL-encoded payloads.

### Third-Party Middleware:

Used to add functionality to Express apps.

```javascript
const cookieParser = require("cookie-parser");
app.use(cookieParser());
```

---

## 3. Error-Handling Middleware

Error-handling middleware functions are defined with **four** arguments instead of three: `(err, req, res, next)`.

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

---

## 4. The `next()` function

Calling `next()` is crucial because it hands over control to the next middleware. If you don't call `next()` (or send a response), the request will hang in the server indefinitely.

---

## 5. Security with Middleware

Using standard middleware like **Helmet** can help secure your Express apps by setting various HTTP headers.

```javascript
const helmet = require("helmet");
app.use(helmet());
```

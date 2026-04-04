---
title: Middleware Architecture
description: Understanding how middleware works in Express.js.
---

# Express.js Middleware Architecture

Middleware functions are functions that have access to the **request (req)** object, the **response (res)** object, and the **next middleware** function in the application’s request-response cycle.

---

## 1. What does it do?

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack (`next()`).

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

### Error-Handling Middleware:

Defined with **four** arguments instead of three: `(err, req, res, next)`.

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

---

## 3. Middleware Order

Middleware and route handlers are executed in the **order they are declared** in the code. This means if you have multiple `app.use()` and `app.get()` calls, they will be invoked sequentially.

---

## 4. The `next()` function

If the current middleware function does NOT end the request-response cycle, it must call `next()` to pass control to the next middleware function. Otherwise, the request will be left hanging.

---
title: Routing Basics
description: Understanding how routing works in Express.
---

# Routing in Express.js

Routing refers to determining how an application responds to a client request to a particular endpoint (e.g., `/users`) and a specific HTTP method (`GET`, `POST`, etc.).

---

## 1. Route Methods

Express methods are defined as: `app.METHOD(PATH, HANDLER)`.

- **`app.get()`**: For retrieving data.
- **`app.post()`**: For sending data.
- **`app.put()`**: For updating data.
- **`app.delete()`**: For deleting data.
- **`app.all()`**: Matches all HTTP methods.

---

## 2. Route Parameters

Route parameters are named URL segments that are used to capture the values specified at their position in the URL.

```javascript
app.get("/users/:userId/books/:bookId", (req, res) => {
  res.send(req.params); // { userId: '34', bookId: '8989' }
});
```

---

## 3. Route Handlers

You can provide multiple callback functions that behave like middleware to handle a request.

```javascript
app.get(
  "/example/b",
  (req, res, next) => {
    console.log("the response will be sent by the next function ...");
    next();
  },
  (req, res) => {
    res.send("Hello from B!");
  },
);
```

---

## 4. Response Methods

The methods on the response object (`res`) can send a response to the client and terminate the request-response cycle.

- **`res.send()`**: Send a response of various types.
- **`res.json()`**: Send a JSON response.
- **`res.status()`**: Set the response status code.
- **`res.redirect()`**: Redirect a request.
- **`res.render()`**: Render a view template.

---

## 5. `express.Router`

Use the `express.Router` class to create modular, mountable route handlers.

```javascript
const express = require("express");
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

// define the home page route
router.get("/", (req, res) => {
  res.send("Birds home page");
});

module.exports = router;
```

Then, you can use the router in your app:

```javascript
const birds = require("./birds");
app.use("/birds", birds);
```

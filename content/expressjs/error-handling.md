---
title: Error Handling
description: Understanding how error handling works in Express.js.
---

# Error Handling in Express.js

Proper error handling is crucial for any application to provide a good user experience and better debugging.

---

## 1. Internal Error Handling

Express catches and processes all errors that occur while running route handlers and middleware.

```javascript
app.get("/error", (req, res) => {
  throw new Error("Something went wrong!");
});
```

By default, Express handles this with its built-in error handler.

---

## 2. Defining Error-Handling Middleware

Error-handling middleware is defined with **four** arguments: `(err, req, res, next)`.

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

This middleware must be placed at the very end of your middleware/route stack.

---

## 3. Catching Asynchronous Errors

If you are using asynchronous code (e.g., `async/await` and Promises), you must pass the error to the `next()` function manually.

```javascript
app.get("/async-error", async (req, res, next) => {
  try {
    const data = await someAsyncOperation();
    res.send(data);
  } catch (error) {
    next(error); // This will call the error-handling middleware
  }
});
```

Starting from Express 5, calling `next(error)` is automatically handled for you when you throw an error inside an `async` function.

---

## 4. Custom Error Handling

You can create your own custom Error class for more specific errors:

```javascript
class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}
```

Then, you can use it in your code:

```javascript
app.get("/users/:id", async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(new CustomError("User not found", 404));
  }
  res.send(user);
});
```

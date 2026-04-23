---
title: Error Handling
description: Understanding how error handling works in Express.js.
---

# Error Handling: The Propagation Cycle

In Express, error handling is a specialized state of the middleware dispatcher. It relies on a specific interface and a unique propagation path.

---

## 1. The 4-Arity Exception

Express internals distinguish "Error-handling middleware" from "Normal middleware" solely by the number of arguments (arity) in the function definition.

- **Normal**: `(req, res, next)`
- **Error**: `(err, req, res, next)`

When `next(arg)` is called with **any** truthy value (that isn't the string `'route'`), Express immediately stops the normal execution flow, skips all remaining non-error middleware, and jumps to the first 4-arity function in the stack.

## 2. The Propagation Path

Error propagation follows the order of definition in the middleware stack.

1.  **Capture**: An error occurs (sync `throw` or `next(err)`).
2.  **Bubbling**: Express searches downward through the stack for the first middleware with 4 arguments.
3.  **Handling**: That middleware executes. It can then either:
    - Send a response.
    - Call `next(err)` to pass the error to the _next_ error handler in the sequence.

## 3. The "Headers Sent" Safety Check

One of the most critical theoretical gotchas in Express is the `res.headersSent` flag.

If an error occurs **after** the response headers have already been sent to the client (e.g., during a stream or after a partial write), trying to send a new response (like a 500 error page) will crash the process because you cannot change headers twice.

```javascript
app.use((err, req, res, next) => {
  if (res.headersSent) {
    // We MUST delegate to the default Express error handler
    // if headers are already sent.
    return next(err);
  }
  res.status(500).send("Custom Error Page");
});
```

## 4. The Default Error Handler (Internals)

Express comes with a built-in error handler that sits at the very end of the stack. If you don't provide a custom one, or if you call `next(err)` in your last error handler, this one takes over.

**Its behavior is specific**:

- It sets the HTTP status code. If `err.status` (or `err.statusCode`) is set, it uses that. If not, it defaults to **500**.
- In production, it sends the status message.
- In development, it sends the full error stack.
- It terminates the request-response cycle.

## 5. Async Errors: Express 4 vs. 5

### Express 4 (Current Stable)

The dispatcher **cannot** catch errors thrown inside asynchronous blocks (Promises/async-await). You _must_ catch them and pass them to `next()`.

```javascript
// Express 4: This will HANG/CRASH the process
app.get('/', async (req, res) => {
  throw new Error('Uncaught');
});

// Express 4: Correct Way
app.get('/', async (req, res, next) => {
  try { ... } catch (e) { next(e); }
});
```

### Express 5 (Beta)

Express 5 introduces native Promise support in the dispatcher. If an `async` middleware rejects, it automatically calls `next(rejection)`.

---

## 6. Best Practice: Centralized Handling

From an architectural standpoint, treat your 4-arity middleware as a **Global Exception Filter**. Don't try to handle high-level logic (like logging or database rollbacks) inside individual routes. Instead, pass the error "up" to the global handler to maintain a single source of truth for error formatting and logging.

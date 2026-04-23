---
title: Middleware Architecture
description: Understanding how middleware works in Express.js.
---

# Middleware: The Dispatcher Engine

In Express, middleware is not just a pattern—it is the core engine. Almost everything in Express, including its built-in router, is a collection of middleware functions.

---

## 1. The `next()` Mechanism: Recursive Dispatching

When you call `app.use()` or `app.get()`, Express adds your function to an internal stack. The `next()` function is the engine that drives this stack forward.

### Internal Logic

Internally, `next()` is a recursive function that pops the next middleware from the stack and executes it.

```javascript
function next(err) {
  // 1. If error, skip to next error-handling middleware
  // 2. Find next layer in stack that matches current URL
  // 3. Execute layer.handle_request(req, res, next)
}
```

## 2. The Onion Model (Execution Flow)

While Express is often called "linear," it actually follows an **Onion Model** because of how the stack unwinds.

### The Flow

1.  **Request Phase**: Code _before_ `next()` is executed in order (down the stack).
2.  **Response Phase**: Code _after_ `next()` is executed in reverse order (up the stack) once the response is being finalized, assuming the middleware is asynchronous or uses callbacks.

```javascript
app.use(async (req, res, next) => {
  console.log("1. Entering Layer A");
  await next();
  console.log("4. Leaving Layer A"); // Unwinding phase
});

app.use(async (req, res, next) => {
  console.log("2. Entering Layer B");
  await next();
  console.log("3. Leaving Layer B");
});
```

## 3. The `Layer` Object (Internals)

Express doesn't just store functions in an array. It wraps them in a `Layer` object. A Layer contains:

- **`path`**: The pattern it matches (e.g., `/user/:id`).
- **`regexp`**: The compiled regex (using `path-to-regexp`).
- **`handle`**: The actual middleware function.
- **`params`**: Extracted variables from the URL.

When a request arrives, Express iterates through the stack and uses `layer.match(path)` to decide whether to execute the handle.

## 4. Arity and Error Handling

Express uses **function arity** (the number of arguments a function accepts) to identify error-handling middleware.

- `(req, res, next)`: Arity 3 (Standard)
- `(err, req, res, next)`: Arity 4 (Error Handler)

When `next(err)` is called with an argument, the dispatcher skips all standard middleware and looks purely for Layers where the handle has an arity of 4.

---

## 5. Performance Implications

Since the middleware stack is traversed sequentially for every request:

- **Order Matters**: Put frequently used middleware (like static file serving or logging) at the top.
- **Complexity**: Big stacks (50+ middleware) can add measurable latency (though usually negligible compared to I/O).
- **Avoid Blocking**: Never do heavy CPU work in middleware without `setImmediate` or a worker thread, as it blocks the single-threaded event loop for ALL incoming requests.

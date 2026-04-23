---
title: Express.js Interview Q&A
description: Commonly asked Express.js interview questions and answers.
---

# Express.js: Architectural Q&A

Deep-dive into the internals and theoretical concepts of the Express.js framework.

---

### 1. How does Express "decorate" the native Node.js Request and Response objects?

Express does not replace the native `http.IncomingMessage` and `http.ServerResponse` objects. Instead, it uses **prototypal inheritance** or direct property assignment (depending on the version) to add helper methods like `res.send()`, `res.json()`, and `req.params`. This allows you to still access all native Node.js properties and methods while having access to Express's high-level API.

### 2. What is the fundamental difference between `app.use('/path', cb)` and `app.all('/path', cb)`?

- **`app.use`**: Matches any path that **starts with** the specified string. It ignores the HTTP method. It also "trims" the matched prefix from `req.url` before passing control to the callback (crucial for sub-routers).
- **`app.all`**: Performs an **exact match** on the path (or regex) and matches **all** HTTP methods. It does not trim the URL.

### 3. How does Express identify error-handling middleware?

Express uses **Function Arity** (the `length` property of the function object). Standard middleware has an arity of 3 (`req, res, next`), while error-handling middleware has an arity of 4 (`err, req, res, next`). When `next()` is called with an argument, the internal dispatcher filters the middleware stack for functions where `fn.length === 4`.

### 4. Why is Express called "linear" yet described as following an "Onion Model"?

Express is linear in how it traverses its middleware stack (top to bottom). However, because middleware can be asynchronous and execute code **after** `await next()`, it effectively behaves like an Onion Model: logic flows "down" into the handlers and then "unwinds" back up through the stack.

### 5. What is the performance impact of a large middleware stack?

Every request must iterate through the `app._router.stack` array. While a simple array iteration is fast, every layer involves a **regex match**. If you have hundreds of routes/middleware at the top level, Express must run those regex matches for every incoming request. You can optimize this by grouping routes into sub-routers to create a more efficient "tree-based" search.

### 6. Explain the "Headers Sent" error and how to prevent it.

The "Headers Sent" error occurs when you try to set a header or status code after the response has already been sent to the client (flushed to the socket). In Express, this often happens in error handlers that execute after a partial response or a stream. You should always check `if (res.headersSent)` before attempting to modify the response in an error handler.

### 7. How does the `app.param()` middleware work internally?

`app.param()` is an implementation of the **Interceptor pattern**. When a route matches a parameter (e.g., `:userId`), Express checks if any parameter handles are registered for `userId`. It executes these handles **exactly once** per request-response cycle, even if the parameter appears in multiple locations or middleware, ensuring consistent data loading.

### 8. What is the role of `path-to-regexp` in Express?

`path-to-regexp` is the library Express uses to compile high-level route strings (like `/user/:id([0-9]+)`) into regular expressions. It provides the metadata needed to extract `req.params` from the URL by identifying the positions of capture groups within the compiled regex.

### 9. How does Express handle asynchronous errors in version 4 vs. version 5?

- **Version 4**: Does not catch Promise rejections. You must manually wrap async code in `try/catch` and call `next(err)`.
- **Version 5**: Naturally supports Promises. If a middleware returns a Promise (as `async` functions do), the router will automatically attach a `.catch(next)` to it.

### 10. Why should `app.use(express.json())` be placed before your routes?

Because Express processes middleware **sequentially**. If a route handler is defined before the JSON body parser, the handler will receive a request where `req.body` is `undefined`, as the stream has not yet been consumed and parsed into an object.

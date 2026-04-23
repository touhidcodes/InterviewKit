---
title: Routing Basics
description: Understanding how routing works in Express.
---

# Routing: The Pattern Matching Engine

Routing in Express is more than just mapping URLs; it's a complex pattern-matching engine built on top of `path-to-regexp`.

---

## 1. Internals: Regex Compilation

When you define a route like `app.get('/user/:id', handler)`, Express doesn't do a simple string comparison. It performs a compilation step:

1.  **String to Regex**: The path string is passed to the `path-to-regexp` library.
2.  **Capture Groups**: Parameters denoted by `:` are converted into regex capture groups.
3.  **The Layer**: A new `Layer` is created with this regex and the handler.

### Example Transformation

- **Route**: `/user/:id`
- **Regex**: `/^\/user\/(?:([^\/]+?))\/?$/i`
- **Keys**: `[{ name: 'id', prefix: '/', ... }]`

When a request for `/user/123` arrives, the regex matches, and the value `123` is extracted from the capture group and assigned to `req.params.id`.

## 2. The Router Tree Architecture

An Express application is essentially a recursive tree of **Routers**.

- **`app`**: The root router.
- **`express.Router()`**: Sub-routers that can be mounted using `app.use()`.

### The "Mounting" Logic

When you mount a router: `app.use('/api', apiRouter)`, Express creates a Layer in the root stack that matches the prefix `/api`. If it matches, the dispatcher **trims** the prefix from the path before passing it to the sub-router.

- Original Path: `/api/users`
- Trimmed Path for Sub-router: `/users`

This delegation allows for modular, decoupled routing logic.

## 3. High-Level Difference: `app.use` vs `app.get`

A common interview question is the difference between these two:

- **`app.use(path, callback)`**: Matches any request starting with `path`, regardless of the HTTP method (GET, POST, etc.).
- **`app.get(path, callback)`**: Performs an **exact match** (after regex compilation) and verifies the HTTP method is `GET`.

Internally, `app.get` simply creates a `Route` object which itself contains a small middleware stack for that specific path and method.

## 4. Parameter Pre-conditions: `app.param()`

The `app.param()` function is a powerful, theoretically important part of Express routing. It allows you to define "Middleware for Parameters."

```javascript
app.param("userId", (req, res, next, id) => {
  // This runs ONCE per request if 'userId' is in the route
  // Great for pre-loading data from a database
  User.findById(id, (err, user) => {
    req.user = user;
    next();
  });
});
```

This is an implementation of the **Interceptor Pattern**, ensuring data consistency across multiple routes that use the same parameter.

---

## 5. Performance Note: The Routing Cost

Every request must iterate through the router stack until it finds a match.

- **Linear Search**: If you have 1000 routes, and the match is at the bottom, Express performs 1000 regex matches.
- **Optimization Tip**: Use sub-routers to "bucket" your routes. Checking a prefix match for a sub-router is faster than checking 100 individual exact-match routes.

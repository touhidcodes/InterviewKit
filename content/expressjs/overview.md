---
title: Introduction
description: Welcome to the Express.js interview kit.
---

# Express.js: Architectural Foundations

Express.js is often described as a "minimalist" framework. Architecturally, this means it provides a thin layer of fundamental web application features without obscuring the underlying Node.js features you know and love.

---

## 1. The Design Philosophy: Unopinionated & Minimalist

Unlike frameworks like NestJS (which is heavily opinionated) or Django, Express doesn't force a specific file structure or dependency injection pattern. It focuses on:

- **Routing**: Mapping URLs to specific logic.
- **Middleware**: A pipeline for processing requests.
- **Request/Response Augmentation**: Adding helper methods to Node's native `http` objects.

## 2. Express and the Node.js `http` Module

At its core, an Express application is just a function passed to Node’s `http.createServer()`.

```javascript
const http = require("http");
const express = require("express");
const app = express();

const server = http.createServer(app);
server.listen(3000);
```

When a request arrives, the Node `http` module creates `IncomingMessage` (req) and `ServerResponse` (res) objects. Express then "decorates" (wraps) these objects with additional functionality like `res.json()`, `res.send()`, and `req.params`.

## 3. The Core Abstraction: The Middleware Pipeline

The most critical theory to understand in Express is the **Middleware Pipeline**. Every Express app is essentially a stack of functions.

1.  **Input**: A request enters the top of the stack.
2.  **Processing**: Each function (middleware) can either:
    - End the cycle by sending a response (`res.send()`).
    - Pass control to the next function (`next()`).
3.  **Output**: Either a response is sent, or the request "falls off" the stack (resulting in a default 404).

## 4. The Request-Response Lifecycle

Understanding the lifecycle is key to debugging performance and race conditions:

1.  **TCP Connection**: The client connects to the server.
2.  **Request Header Parsing**: Node parses the headers and creates the `req` object.
3.  **Express Entry**: `app(req, res)` is called.
4.  **Middleware Execution**: Express iterates through the `router.stack`.
5.  **Route Matching**: The router attempts to match `req.url` against defined paths.
6.  **Final Response**: `res.end()` (called internally by `res.send` or `res.json`) flushes headers and body to the socket.

---

## Next Steps

Explore the deeper mechanics of these components:

- [**Middleware Architecture**](./middleware): How the `next()` function works and the "onion" model.
- [**Routing Mechanics**](./routing): How Express uses Regex and Layers to match paths.
- [**Error Handling**](./error-handling): The internal logic behind the 4-argument error middleware.

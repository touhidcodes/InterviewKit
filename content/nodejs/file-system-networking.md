---
title: File System & Networking
description: Interacting with the OS and building networked applications.
---

# OS-Level Operations in Node.js

Node.js excels at bridging compiled C++ logic with asynchronous JavaScript to perform high-performance File System and Networking operations.

## 1. The File System (`fs`) Module

**Theory**: File I/O is inherently blocking at the OS level on many systems. Node.js (via Libuv) simulates asynchronous behavior by offloading `fs` calls to the **Thread Pool**.

### Sync vs Async vs Promises

- **`fs.readFileSync`**: Blocks the entire Event Loop. Never use in a request/response cycle.
- **`fs.readFile(cb)`**: Best for basic tasks (Legacy).
- **`fs/promises`**: Recommended for modern development. Uses the `async/await` pattern.

### Watchers

`fs.watch` and `fs.watchFile` allow monitoring changes to files.

- **Theory**: `fs.watch` uses native OS events (like `inotify` on Linux or `FSEvents` on macOS) and is more efficient than the polling used by `fs.watchFile`.

## 2. Networking (`net` & `http`)

Node.js networking is built on **Sockets**.

### The `net` Module

Used to create TCP servers and clients. It is the foundation for `http`.

```javascript
const net = require("net");
const server = net.createServer((socket) => {
  socket.write("Echo server\r\n");
  socket.pipe(socket);
});
server.listen(1337);
```

### The `http` Module

**Theory**: The `http` module is a high-level wrapper around the `net` module that implements the HTTP protocol parser (written in C) and manages the request/response lifecycle.

## 3. DNS (Domain Name System)

**Theory**: DNS resolution in Node.js can be confusing.

- `dns.lookup`: Uses the underlying OS facilities (like `getaddrinfo`). It is **synchronous** and uses the Libuv thread pool.
- `dns.resolve`: Performs a network query and is truly **asynchronous**.

## 4. Path and URL Resolution

**Theory**: Handling file paths correctly across Windows and Unix is critical. The `path` module provides cross-platform utility methods.

- `path.join`: Joins segments using the platform-specific separator (`\` or `/`).
- `path.resolve`: Resolves a sequence of paths into an **absolute path**.

## 5. Security: Path Traversal

**Theory**: When reading files based on user input, you must prevent "Path Traversal" attacks (e.g., a user requesting `../../etc/passwd`).

- **Mitigation**: Always use `path.normalize` and check if the resulting path starts with your safe "base" directory.

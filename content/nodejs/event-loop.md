---
title: Event Loop & Libuv
description: Understanding the asynchronous core of Node.js.
---

# Event Loop & Libuv

The Event Loop is what allows Node.js to perform non-blocking I/O operations by offloading tasks to the system kernel whenever possible.

---

## 1. Libuv: The Core Library

Node.js relies on **Libuv**, a multi-platform C library that provides asynchronous I/O based on events. It handles:

- **The Event Loop**
- **Thread Pool** (used for I/O and CPU-bound operations)
- **Async System Calls** (DNS, FS, etc.)

---

## 2. Phases of the Event Loop

The JavaScript code that we write runs on a single main thread. However, behind the scenes, Libuv manages the loop with distinct phases:

1. **Timers**: Executes callbacks scheduled by `setTimeout()` and `setInterval()`.
2. **Pending Callbacks**: Executes I/O callbacks deferred to the next loop iteration (e.g., specific TCP errors).
3. **Idle, Prepare**: Used only internally.
4. **Poll**: Retrieves new I/O events. This is where most I/O callbacks are executed.
5. **Check**: Executes `setImmediate()` callbacks.
6. **Close Callbacks**: Executes `close` event callbacks like `socket.on('close', ...)`.

---

## 3. Microtasks vs Macrotasks

In Node.js, there are two queues for tasks outside the common phases:

- **`process.nextTick()`**: These callbacks are executed **immediately after the current operation**, before the Event Loop proceeds to the next phase.
- **Promise Microtasks**: (e.g., `Promise.resolve().then()`) These are executed **right after `process.nextTick()`** but before the next Event Loop phase.

### Execution Order:

1. Current Phase (Timers, Poll, etc.)
2. `process.nextTick()`
3. Promise Microtasks
4. Move to Next Phase

---

## 4. The Thread Pool (Worker Pool)

Although Node.js is single-threaded, Libuv maintains a thread pool (size is 4 by default) for handling heavy tasks:

- **File System (FS)**: Reading/Writing files.
- **Crypto**: Hashing, Encryption.
- **DNS Lookup**: `dns.lookup()`.
- **Zlib**: Compression.

You can increase the pool size using the environmental variable:

```bash
UV_THREADPOOL_SIZE=8 node app.js
```

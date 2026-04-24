---
title: The Event Loop & Libuv
description: A deep dive into the phases of the Node.js event loop and task scheduling.
---

# The Node.js Event Loop

The Event Loop is the heart of Node.js. It allows the runtime to perform non-blocking I/O operations despite JavaScript being single-threaded.

## 1. The 6 Phases of the Event Loop

Every "tick" of the event loop goes through these phases in order:

1.  **Timers**: Executes callbacks scheduled by `setTimeout()` and `setInterval()`.
2.  **Pending Callbacks**: Executes I/O callbacks deferred from the previous loop iteration (e.g., certain TCP errors).
3.  **Idle, Prepare**: Used internally by Node.js.
4.  **Poll**: Retrieves new I/O events. This is where Node.js will block if there's nothing else to do.
5.  **Check**: Executes `setImmediate()` callbacks.
6.  **Close Callbacks**: Executes callbacks for close events, e.g., `socket.on('close', ...)`.

## 2. Macrotasks vs. Microtasks

**Theory**: Not all asynchronous tasks are treated equally.

### Microtasks

- `process.nextTick()` (Highest priority)
- `Promise.then()` callbacks
- **Theory**: Microtasks are executed **between every phase** of the event loop and even before the loop starts. If you recursively call `process.nextTick()`, you will starve the Event Loop and block I/O.

### Macrotasks

- `setTimeout`, `setInterval`, `setImmediate`, I/O tasks.
- **Theory**: Macrotasks are executed within their specific phases.

## 3. `setImmediate()` vs `setTimeout(0)`

**Theory**:

- `setImmediate()` is designed to execute a script once the current **Poll** phase completes.
- `setTimeout(f, 0)` schedules a script to run after a minimum threshold in ms has elapsed.

**The Catch**: If called from within an I/O cycle, `setImmediate` will **always** run before any timer, regardless of how many timers are present.

## 4. Libuv Thread Pool

**Theory**: While the Event Loop runs on a single thread, some tasks are too heavy or lack asynchronous OS primitives (like File System operations and certain Crypto/Zlib tasks).

- Libuv maintains a **Thread Pool** (default size: 4).
- You can increase it via `process.env.UV_THREADPOOL_SIZE = n`.
- **Important**: Networking (sockets) does NOT use the thread pool; it uses OS-native async primitives like `epoll` (Linux), `kqueue` (macOS), or `IOCP` (Windows).

## 5. Starvation Theory

**Theory**: If the Event Loop is busy executing a long-running synchronous calculation (like a heavy `for` loop or `JSON.parse` on a 100MB string), the phases cannot progress. This is "Blocking the Event Loop," and it prevents the server from responding to new requests, even if the OS is ready to deliver the data.

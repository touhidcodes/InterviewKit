---
title: Node.js Interview Questions
description: A comprehensive collection of Node.js interview questions and answers.
---

# Node.js Core Questions

### 1. What is Node.js and why is it single-threaded?

Node.js is an open-source, cross-platform JavaScript runtime built on Chrome's V8 engine. It uses an **asynchronous, event-driven I/O model** that makes it lightweight and efficient.

It is single-threaded in the sense that it uses a single thread for the **Event Loop**. However, for heavy tasks like file I/O or network operations, it uses **Libuv**, which manages a thread pool (Worker Pool) to handle blocking operations in the background.

### 2. What is the Event Loop in Node.js?

The Event Loop is the heart of Node.js. It allows Node.js to perform non-blocking I/O operations by offloading tasks to the system kernel whenever possible.

The Event Loop has several phases:

1. **Timers**: Executes `setTimeout()` and `setInterval()` callbacks.
2. **Pending Callbacks**: Executes I/O callbacks deferred to the next loop iteration.
3. **Idle, Prepare**: Used internally.
4. **Poll**: Retrieves new I/O events; executes I/O related callbacks.
5. **Check**: Executes `setImmediate()` callbacks.
6. **Close Callbacks**: Executes callbacks like `socket.on('close', ...)`.

### 3. What is the difference between `process.nextTick()` and `setImmediate()`?

- **`process.nextTick()`**: Schedules a callback to be invoked in the current phase of the Event Loop, before moving to the next phase. It is technically not part of the Event Loop but is processed immediately after the current operation completes.
- **`setImmediate()`**: Schedules a callback to be invoked in the **Check** phase of the Event Loop.

### 4. What are Streams in Node.js?

Streams are objects that let you read data from a source or write data to a destination in a continuous fashion. In Node.js, there are four types of streams:

- **Readable**: Used for reading operations (e.g., `fs.createReadStream()`).
- **Writable**: Used for writing operations (e.g., `fs.createWriteStream()`).
- **Duplex**: Can be used for both reading and writing (e.g., `net.Socket`).
- **Transform**: A type of duplex stream where the output is computed based on the input (e.g., `zlib.createGzip()`).

### 5. What is the purpose of the `Buffer` class?

The `Buffer` class in Node.js is designed to handle binary data. Since JavaScript did not originally have a mechanism for reading or manipulating streams of binary data, Node.js introduced `Buffer` to interact with TCP streams, file system operations, and other contexts where binary data is common.

```javascript
const buf = Buffer.from("hello", "utf8");
console.log(buf.toString("hex")); // 68656c6c6f
```

### 6. How does the Cluster module work?

The **Cluster module** allows you to create child processes (workers) that share the same server port. This is useful for scaling Node.js applications across multiple CPU cores, as the single-threaded nature of Node.js would otherwise only utilize one core.

```javascript
const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end("Hello World\n");
    })
    .listen(8000);
}
```

### 7. What is the difference between `module.exports` and `exports`?

- **`module.exports`**: The actual object that gets returned by `require()`.
- **`exports`**: A shorthand reference to `module.exports`.

If you assign a new value to `exports`, it will no longer point to `module.exports`, and your module will skip exporting that value. Always use `module.exports` if you want to export a single object/function.

### 8. What is REPL in Node.js?

REPL stands for **Read-Eval-Print Loop**. it is a simple interactive computer programming environment that takes single user inputs, executes them, and returns the result to the user. Node.js comes with a built-in REPL environment.

### 9. How do you handle Uncaught Exceptions in Node.js?

You can catch uncaught exceptions using the `process` object:

```javascript
process.on("uncaughtException", (err) => {
  console.error("There was an uncaught error", err);
  process.exit(1); // Mandatory (as per Node.js docs)
});
```

However, it is better to use `try-catch` blocks or Promises with `.catch()` whenever possible.

### 10. What is "Callback Hell" and how can it be avoided?

Callback Hell refers to heavily nested callbacks that make code hard to read and maintain. It can be avoided by:

1. **Modularization**: Splitting callbacks into independent functions.
2. **Promises**: Using `.then()` and `.catch()`.
3. **Async/Await**: The modern way to handle asynchronous code in a synchronous-looking style.

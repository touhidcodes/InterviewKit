---
title: Streams & Buffers
description: Deep dive into Node.js Streams and Buffers for high-performance I/O operations.
---

# Streams and Buffers in Node.js

Node.js uses **Streams** and **Buffers** to efficiently handle binary data and file/network I/O.

## 1. What are Buffers?

Buffers are chunks of memory that store binary data. Since JavaScript originally lacked a way to handle raw binary data, Node.js introduced the `Buffer` class.

### Key points about Buffers:

- Buffers are **fixed-size** memory allocations outside the V8 heap.
- They are used to temporarily hold data before it's processed or moved.
- Buffers can store bytes, strings with encoding (UTF-8, Base64, Hex), and more.

### Common Buffer Methods:

```javascript
const buf = Buffer.alloc(10); // Creates a buffer of 10 bytes filled with 0s
const buf2 = Buffer.from("Node.js", "utf8"); // Creates a buffer from a string
console.log(buf2.toString()); // Node.js
```

---

## 2. What are Streams?

Streams are objects that allow you to read data from a source or write data to a destination in small chunks, rather than loading the entire file into memory.

### Why use Streams?

1. **Memory Efficiency**: You don't need to load large files into RAM entirely.
2. **Time Efficiency**: You can start processing data as soon as the first chunk arrives.

### Types of Streams:

1. **Readable**: For reading data (e.g., `fs.createReadStream()`).
2. **Writable**: For writing data (e.g., `fs.createWriteStream()`).
3. **Duplex**: For both (e.g., TCP sockets).
4. **Transform**: For modifying data as it passes through (e.g., `zlib.createGzip()`).

---

## 3. The Pipe Method

Merging two streams (e.g., reading from a file and writing it directly to a network response) is done using `.pipe()`.

```javascript
const fs = require("fs");
const http = require("http");

http
  .createServer((req, res) => {
    const stream = fs.createReadStream("large-file.txt");
    stream.pipe(res); // Efficiently sends the file chunk by chunk
  })
  .listen(3000);
```

---

## 4. Backpressure

Backpressure occurs when the **writable stream** cannot keep up with the speed at which the **readable stream** is sending data.

Node.js handles this by:

- Pausing the readable stream when the write buffer is full.
- Resuming once the buffer has been flushed (`'drain'` event).

### Handling backpressure manually:

```javascript
const readable = fs.createReadStream("input.txt");
const writable = fs.createWriteStream("output.txt");

readable.on("data", (chunk) => {
  const canContinue = writable.write(chunk);
  if (!canContinue) {
    readable.pause(); // Pause reading if buffer is full
  }
});

writable.on("drain", () => {
  readable.resume(); // Resume when writable has space
});
```

Using `.pipe()` handles backpressure automatically for you.

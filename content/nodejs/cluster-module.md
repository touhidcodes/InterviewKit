---
title: Cluster Module
description: Scalability in Node.js using Child Processes and Worker Threads.
---

# Cluster Module in Node.js

Node.js runs in a **single-threaded** manner by default. However, it provides the **Cluster module** to take advantage of multi-core systems.

---

## 1. What is the Cluster Module?

The Cluster module allows you to create child processes (workers) that share the same server port. This enables you to distribute incoming network requests across all available CPU cores.

### How it works:

- **Master Process**: Orchestrates the child processes and listens on the main port.
- **Worker Processes**: Handle the actual processing of requests.

---

## 2. Setting Up a Basic Cluster

```javascript
const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
  console.log(`Master process ${process.pid} is running`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died. Forking a new one...`);
    cluster.fork();
  });
} else {
  // Workers can share any TCP connection
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end("Hello from Worker!");
    })
    .listen(8000);

  console.log(`Worker ${process.pid} started`);
}
```

---

## 3. Communication between Processes

Processes created using the cluster module can communicate by sending **IPC (Inter-Process Communication)** messages.

- **`process.send()`**: Send a message to the master.
- **`worker.on('message', ...)`**: Receive a message on the master from a child worker.

---

## 4. Why use Clustering?

- **Zero-Downtime Reloads**: You can restart workers one by one to update code without dropping connections.
- **Improved Fault Tolerance**: If one worker crashes, the master can restart it without affecting the entire server.
- **Increased Throughput**: Better utilization of server resources.

---

## 5. Alternatives: Worker Threads

While Clustering uses full processes (each with its own memory/V8 instance), **Worker Threads** (introduced later in Node.js) use shared memory for threads.

- **Cluster Module**: Best for I/O-intensive task distribution (e.g., HTTP servers).
- **Worker Threads**: Best for CPU-intensive tasks (e.g., image processing, encryption).

---
title: Performance Profiling
description: Tips and tools for optimizing Node.js applications.
---

# Performance Profiling in Node.js

Node.js is built for performance, but as your application scales, you may encounter memory leaks, high CPU usage, or slow I/O.

---

## 1. Using Chrome DevTools

You can profile your Node.js application using Chrome DevTools by running:

```bash
node --inspect app.js
```

Open `chrome://inspect` in your browser and connect to your dedicated DevTools for Node.js. This allows you to:

- Take **Heap Snapshots** to detect memory leaks.
- Create **CPU Profiles** to see which functions are taking the most time.

---

## 2. The Internal `--prof` Flag

Node.js has a built-in profiler that collects profiling data into a `v8.log` file.

```bash
node --prof app.js
```

After running your application, you can process the log file using the following command:

```bash
node --prof-process v8.log > processed.txt
```

---

## 3. Detecting Memory Leaks

Memory leaks often happen when objects are inadvertently kept in memory, preventing garbage collection.

- **Global Variables**: Unintentional global variables are not garbage collected.
- **Closures**: Keeping references to large objects in closures.
- **Timers**: Not clearing `setInterval()` or `setTimeout()`.

### Using `heapdump`:

You can trigger a heap dump programmatically:

```javascript
const heapdump = require("heapdump");
heapdump.writeSnapshot("./" + Date.now() + ".heapsnapshot");
```

---

## 4. Monitoring Tools (APMs)

For production environments, use Application Performance Monitoring tools:

- **PM2**: Has built-in monitoring and process management.
- **New Relic**: Provides detailed transaction and database traces.
- **Elastic APM**: Excellent visibility into services and errors.

---

## 5. Best Practices for High Performance

1. **Never Block the Event Loop**: Avoid long-running synchronous code.
2. **Use Streams**: For large file or network operations.
3. **Cluster Your App**: Utilize multiple CPU cores.
4. **Cache Expensive Operations**: Use Redis or an in-memory cache for repeated calculations.
5. **Optimize Database Queries**: Ensure your database has the correct indexes.

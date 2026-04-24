---
title: Performance & Memory Management
description: Understanding the V8 Garbage Collector and profiling techniques.
---

# Performance and Memory in Node.js

High-performance Node.js applications require an understanding of how the V8 engine manages memory and how to identify bottlenecks.

## 1. V8 Memory Management

**Theory**: V8 divides memory into several "Spaces":

- **New Space**: Where young objects live. It's small and garbage collected frequently (Scavenge collection).
- **Old Space**: Where objects that survived multiple New Space collections live.
- **Large Object Space**: For objects larger than others.
- **Code Space**: Where the JIT compiler stores compiled code.

### Garbage Collection (GC)

V8 uses a **Mark-and-Sweep** algorithm for the Old Space. It stops the execution of JavaScript (Stop-the-world) briefly to identify and remove unreachable objects.

## 2. Common Memory Leaks

**Theory**: A memory leak occurs when objects are no longer needed but are still reachable from the Root object.

1.  **Global Variables**: Accidental globals stay in memory for the life of the process.
2.  **Closures**: Variables captured in a closure will not be GC'd until the closure itself is gone.
3.  **Timers & Listeners**: Forgetting to `clearInterval` or `removeListener` can keep objects alive.
4.  **Cache without TTL**: Using an object as a cache without a way to expire old entries.

## 3. Profiling and Debugging

- **`node --inspect`**: Enables the V8 inspector, allowing you to use Chrome DevTools to debug and profile.
- **Heap Snapshots**: Captures the state of memory at a specific point. Used to find leaks.
- **Flame Graphs**: Visualize CPU time spent in each function. Helps find "hot" synchronous functions that block the loop.

## 4. Optimization Strategies

### Use `Buffer` for Large Binary Data

Buffers are allocated outside the V8 heap, meaning they don't impact the GC performance as much as standard JavaScript objects or arrays.

### Avoid `delete` and changing Object Shape

**Theory**: V8 uses **Hidden Classes** to optimize property access. If you add or delete properties from an object after it's created, V8 might drop it into "Dictionary Mode," which is significantly slower.

### Pre-allocation

If you know an array will have 10,000 elements, initialize it with `new Array(10000)`. This allows V8 to allocate a contiguous block of memory in one go.

## 5. Summary Profile

| Type              | Diagnostic Tool                 |
| :---------------- | :------------------------------ |
| **CPU Spikes**    | Flame Graphs / CPU Profiler     |
| **Memory Growth** | Heap Snapshots / `--trace-gc`   |
| **I/O Latency**   | `long-stack-traces` / APM tools |

---
title: Event Loop
description: Mastering the Event Loop, Call Stack, and Macrotasks vs Microtasks.
---

# The JavaScript Event Loop

JavaScript is a single-threaded language, which means it can only execute one command at a time. The **Event Loop** is what allows JS to perform non-blocking I/O operations despite its single-threaded nature.

## Main Components

1. **Call Stack**: Where the code that is currently executing is placed. When a function is called, it is pushed onto the stack. When it completes, it is popped off.
2. **Web APIs**: Provided by the environment (browser or Node.js). For example, `setTimeout`, `fetch`, and DOM events.
3. **Macrotask Queue**: For tasks like `setTimeout`, `setInterval`, and I/O.
4. **Microtask Queue**: For higher-priority tasks like `Promise.then` and `process.nextTick` (Node.js).

## How it works

1. **Check Call Stack**: If the call stack is not empty, execute the code on the stack.
2. **If Empty (Macrotask vs Microtask)**:
   - Execute all tasks in the Microtask queue. (Microtasks ALWAYS execute first after a task).
   - If there are no more microtasks, take the FIRST task from the Macrotask queue and run it.
   - Repeatedly check for microtasks after each macrotask is done.

## Example

```javascript
console.log("1"); // Main execution context, on Stack.

setTimeout(() => {
  console.log("2"); // Macrotask, put into Macrotask queue.
}, 0);

Promise.resolve().then(() => {
  console.log("3"); // Microtask, put into Microtask queue.
});

console.log("4"); // Main execution context, on Stack.

// Output:
// 1
// 4
// 3 (Microtask always before first macrotask)
// 2
```

## Tips for performance

1. **Avoid blocking the Event Loop**: Don't run very heavy tasks on the main thread.
2. **Break down heavy computation**: Use `Web Workers` or use `setImmediate` / `setTimeout` to chunk your work.

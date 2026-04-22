---
title: Promises
description: Asynchronous operations and Error handling with Promises.
---

# Promises in JavaScript

A **Promise** is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.

## The Theory of Asynchrony

### 1. Inversion of Control

Before Promises, we used callbacks. The problem with callbacks is **Inversion of Control**: you hand your code to a third-party library and hope it calls your callback correctly.
Promises solve this by returning a "token" (the promise object) that represents the future value, allowing you to maintain control over your own code execution flow.

### 2. State Machine Logic

A Promise acts as a state machine that can only change its state once (it is **immutable** once settled).

- **Pending**: The initial state.
- **Settled**:
  - **Fulfilled**: The operation completed successfully.
  - **Rejected**: The operation failed.

## Promises & The Microtask Queue

The "Theory" of how Promises run is tied to the **Event Loop**.

- Promises are handled in the **Job Queue (Microtask Queue)**.
- Microtasks have higher priority than Macrotasks (`setTimeout`, `setInterval`).
- The Event Loop will drain the entire Microtask Queue before moving to the next Macrotask.

```javascript
console.log("Start");

setTimeout(() => console.log("Timeout"), 0); // Macrotask

Promise.resolve().then(() => console.log("Promise")); // Microtask

console.log("End");

// Output: Start -> End -> Promise -> Timeout
```

## Internal Mechanics

### Chaining (The "Thenable" Theory)

Every time you call `.then()`, it returns a **new Promise**. This is why chaining works. If the callback inside `.then()` returns a value, the new promise is resolved with that value. If it returns a promise, the new promise "waits" for that promise to settle.

### Error Propagation

Errors in promises bubble up the chain until they reach a `.catch()` block. This is analogous to `try/catch` in synchronous code.

## Modern Theory: Async / Await

`Async/Await` is built on top of Promises.

- An `async` function always returns a Promise.
- `await` effectively "pauses" the execution of the function (releasing the thread back to the event loop) until the promise settles.
- It doesn't block the main thread; it just makes the code _look_ synchronous.

## Essential Static Methods

- `Promise.all()`: **Concurrency**. Fails fast if any promise rejects.
- `Promise.allSettled()`: **Resilience**. Waits for all, regardless of outcome.
- `Promise.race()`: **Speed**. Settles as soon as the first one settles.
- `Promise.any()`: **First success**. Ignores rejections unless all fail.

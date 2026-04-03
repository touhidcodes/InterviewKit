---
title: Promises
description: Asynchronous operations and Error handling with Promises.
---

# Promises in JavaScript

A **Promise** represents an eventual completion (or failure) of an asynchronous operation and its resulting value.

A **Promise** is in one of these states:

- **Pending**: Initial state, neither fulfilled nor rejected.
- **Fulfilled**: Operation completed successfully.
- **Rejected**: Operation failed.

## How to Create a Promise

```javascript
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Operation succeeded");
  } else {
    reject("Operation failed");
  }
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
```

## Chaining Promises

```javascript
const calculate = (x) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(x + 2), 1000);
  });
};

calculate(2)
  .then((res1) => calculate(res1)) // adds 2 more (res1 is 4)
  .then((res2) => console.log(res2)); // logs 6
```

## Async / Await (The Better Way)

Async/await provides syntactic sugar for promises, making asynchronous code more readable.

```javascript
async function fetchData() {
  try {
    const data = await fetch("https://api.example.com/data");
    const json = await data.json();
    console.log(json);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
```

## Static Methods

- `Promise.all([p1, p2, p3])`: Resolves after all promises resolve, or rejects if any of them fails.
- `Promise.race([p1, p2, p3])`: Resolves or rejects after the FIRST promise completes.
- `Promise.allSettled([p1, p2, p3])`: Resolves when all promises settle (Succeeded OR failed).
- `Promise.any([p1, p2, p3])`: Resolves as soon as any promise SUCCEEDS.

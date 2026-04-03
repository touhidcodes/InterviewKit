---
title: Closures
description: Understanding lexical scoping and closures in JavaScript.
---

# Closures in JavaScript

A **closure** is the combination of a function bundled together (enclosed) with references to its surrounding state (the **lexical environment**).

In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

## Example

```javascript
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
```

In this example, `add5` and `add10` are both closures. They share the same function body definition, but store different lexical environments. In `add5`'s lexical environment, `x` is 5, while in the lexical environment for `add10`, `x` is 10.

## Why use Closures?

1. **Data Privacy / Encapsulation**: Emulating private methods using the module pattern.
2. **Partial Application / Currying**: Fixing some arguments and returning a new function.
3. **Event Handlers / Callbacks**: Maintaining state in asynchronous operations.

## Common Interview Question: The Loop Problem

```javascript
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// Outputs: 4, 4, 4 (after 1 second)
```

**Fix with IIFE and Closure:**

```javascript
for (var i = 1; i <= 3; i++) {
  (function (index) {
    setTimeout(function () {
      console.log(index);
    }, 1000);
  })(i);
}
// Outputs: 1, 2, 3
```

**Fix with `let` (Block Scope):**

```javascript
for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// Outputs: 1, 2, 3
```

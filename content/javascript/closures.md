---
title: Closures
description: Understanding lexical scoping and closures in JavaScript.
---

# Closures in JavaScript

A **closure** is the combination of a function bundled together (enclosed) with references to its surrounding state (the **lexical environment**).

In essence, a closure allows an inner function to access the scope of an outer function even after the outer function has finished executing.

## Theoretical Foundation

### 1. Lexical Scoping

JavaScript uses **Lexical Scoping**, meaning the accessibility of variables is determined by the physical location of the variables within the source code. An inner scope has access to variables defined in its outer scope.

### 2. Execution Context & The Stack

When a function is called, an **Execution Context** is created and pushed onto the **Call Stack**. Normally, when the function returns, its execution context is popped off and its local variables are eligible for garbage collection.

**The Closure Exception**: If an inner function is returned (or preserved elsewhere), it maintains a reference to the outer function's variable environment. Even though the outer function is gone from the stack, its variables stay in memory because the inner function still "closes over" them.

## Core Mechanisms

### How it Works Internally

1. **Creation Phase**: When a function is defined, it stores a hidden property (often referred to as `[[Environment]]`) that points to the Lexical Environment where it was created.
2. **Persistence**: As long as the inner function exists, the outer Lexical Environment cannot be garbage collected.

## Real-World Applications

### 1. Data Privacy (Encapsulation)

Closures are the primary way to create "private" variables in JavaScript (before the introduction of `#` private class fields).

```javascript
function createCounter() {
  let count = 0; // Private variable
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
  };
}

const counter = createCounter();
console.log(counter.getCount()); // 0
counter.increment();
console.log(counter.getCount()); // 1
// count is inaccessible from the outside
```

### 2. Function Factories (Partial Application)

Creating specialized versions of a function by "pre-filling" some arguments.

```javascript
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
```

## The "Loop Problem" Revisited

The classic closure interview question involves `var` inside a loop.

```javascript
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Outputs: 4, 4, 4
```

**Theory**: `var` is function-scoped. All callbacks share the _same_ `i` reference. By the time they run, `i` is 4.

**Solution (Theory)**: Using `let` creates a **new lexical environment** for every iteration of the loop, effectively creating a unique closure for each callback.

## Performance Considerations

- **Memory Consumption**: Closures prevent variables from being garbage collected. Overuse or holding large objects in closures can lead to memory leaks.
- **Scope Chain Lookup**: Accessing variables in outer scopes is slightly slower than accessing local variables, though modern engines (V8) optimize this heavily.

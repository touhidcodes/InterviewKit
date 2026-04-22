---
title: Execution Context & Hoisting
description: Understanding how the JS engine executes code and manages memory.
---

# Execution Context & Hoisting

The **Execution Context** is the environment in which JavaScript code is executed. It is the most fundamental part of the JavaScript language theory.

## 1. Types of Execution Context

1.  **Global Execution Context (GEC)**: The default context where code runs for the first time. It creates the `window` object (in browsers) and sets `this` to it.
2.  **Function Execution Context (FEC)**: Created every time a function is invoked. Each function has its own context.
3.  **Eval Execution Context**: (Rarely used) Code executed inside an `eval` function.

## 2. The Execution Context Phases

Every execution context goes through two phases:

### Phase A: Creation Phase

1.  **Memory Creation**: The engine scans the code and allocates memory for variables and functions.
2.  **Hoisting**:
    - Functions are stored with their entire definition.
    - `var` variables are stored as `undefined`.
    - `let` and `const` variables are also hoisted but placed in a **Temporal Dead Zone (TDZ)**.
3.  **Scope Chain**: It creates a reference to its outer environment.
4.  **`this` Binding**: The value of `this` is determined.

### Phase B: Execution Phase

1.  Variable assignments are made.
2.  The code is executed line by line.

## 3. Hoisting Theory

**Hoisting** is often explained as "moving declarations to the top," but physically, the code doesn't move. The engine simply sets aside memory for them during the Creation Phase.

### Variable Hoisting

```javascript
console.log(a); // undefined (due to var hoisting)
var a = 10;

console.log(b); // ReferenceError (TDZ)
let b = 20;
```

### Function Hoisting

```javascript
sayHi(); // "Hello" (Function declarations are fully hoisted)

function sayHi() {
  console.log("Hello");
}

sayHello(); // TypeError: sayHello is not a function
var sayHello = function () {
  console.log("Hello");
};
```

## 4. The Call Stack

JavaScript uses a **Call Stack** to keep track of multiple execution contexts.

- When a function is called, a new FEC is **pushed** onto the stack.
- When the function finishes, it is **popped** off the stack.
- The GEC is always at the bottom of the stack.

## 5. Scope vs Context

- **Scope**: Pertains to the visibility and lifetime of variables (Lexical).
- **Context**: Pertains to the value of `this` within a function execution.

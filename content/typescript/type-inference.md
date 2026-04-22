---
title: Type Inference & CFA
description: How the TypeScript engine understands your code without annotations.
---

# Type Inference & Control Flow Analysis

TypeScript's power comes from its ability to infer types. You don't have to annotate everything because the compiler uses **Type Inference** and **Control Flow Analysis (CFA)**.

## 1. Type Inference Theory

When you don't provide an explicit type, TypeScript tries to determine the best type based on the value provided.

```typescript
let x = 3; // Type inferred as 'number'
```

**Theory**: The compiler assigns the most specific type that matches the value.

## 2. Literal Widening

If you use `let`, TypeScript "widens" a literal type to its base type. If you use `const`, it keeps the literal type.

```typescript
const a = "Hello"; // Type: "Hello" (Literal type)
let b = "Hello"; // Type: string (Widened)

const obj = {
  name: "Touhid",
}; // obj.name is widened to string because it's mutable
```

**The Theory**: Widening allows for mutation. Since `let` variables can change, assigning them to the base type (`string`, `number`) makes them more flexible. `const` is immutable, so the literal type is enough.

## 3. Control Flow Analysis (CFA)

CFA is the process by which TypeScript narrows a type based on the code's execution path.

```typescript
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase()); // id is narrowed to string here
  } else {
    console.log(id.toFixed()); // id is narrowed to number here
  }
}
```

**Theory**: The compiler builds a flow graph of your code. Every `if`, `switch`, and early `return` acts as a **Type Guard**, allowing the compiler to "prune" the type union.

## 4. Contextual Typing

Sometimes the type is inferred from the _location_ where the value is used.

```typescript
window.onmousedown = function (mouseEvent) {
  console.log(mouseEvent.button); // mouseEvent is inferred from window.onmousedown
};
```

**Theory**: The type flows from the "outside in," rather than the "inside out."

## 5. Type Assertions (The "Trust Me" Theory)

Sometimes you know more about a value than the compiler.

```typescript
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
```

**Theory**: Assertions do not perform any runtime checking or casting. They are purely for the compiler (Type Erasure) and will be removed in the final JS. If you lie to the compiler, your code will fail at runtime.

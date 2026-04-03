---
title: Basic Types
description: Understanding fundamental types in TypeScript.
---

# TypeScript Basic Types

TypeScript provides several basic types to help you describe your data:

### 1. Simple Types

- `boolean`: `let isDone: boolean = false;`
- `number`: `let decimal: number = 6;`
- `string`: `let color: string = "blue";`

### 2. Array and Tuple

- `Array`: `let list: number[] = [1, 2, 3];` or `let list: Array<number> = [1, 2, 3];`
- `Tuple`: Allows you to express an array where the type of a fixed number of elements is known.
  ```typescript
  let x: [string, number];
  x = ["hello", 10]; // OK
  // x = [10, "hello"]; // Error
  ```

### 3. Enum

Enums allow us to define a set of named constants.

```typescript
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
```

### 4. Any, Unknown, and Never

- `any`: Opt-out of type checking. Use sparingly.
- `unknown`: Similar to `any`, but safer because you cannot do anything with an `unknown` value until you narrow it.
- `never`: Represents types of values that never occur (e.g., a function that always throws an error).

### 5. Void

Used for functions that do not return a value.

```typescript
function warnUser(): void {
  console.log("This is a warning message");
}
```

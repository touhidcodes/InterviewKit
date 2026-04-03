---
title: Generics
description: Creating reusable and type-safe components.
---

# TypeScript Generics

TypeScript **Generics** are used to provide safe types when dealing with dynamic data. They Allow us to define components (like functions or classes) with a placeholder type that we can fill in later.

### Generic Function example

```typescript
function identity<T>(arg: T): T {
  return arg;
}

const output1 = identity<string>("myString"); // T is string
const output2 = identity<number>(100); // T is number
```

### Generic Interface example

```typescript
interface GenericIdentityFn<T> {
  (arg: T): T;
}

let myIdentity: GenericIdentityFn<number> = (arg) => arg;
```

### Constraints with `extends`

Sometimes you want to limit what a generic can be. You can use `extends` to add constraints.

```typescript
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // OK
  return arg;
}
```

### Generic Classes example

```typescript
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;

  constructor(zero: T, addFn: (x: T, y: T) => T) {
    this.zeroValue = zero;
    this.add = addFn;
  }
}

let myGenericNumber = new GenericNumber<number>(0, (x, y) => x + y);
```

### Summary

Generics provide a way to create components that work over a variety of types rather than a single one. This makes your code more flexible, reusable, and most importantly, type-safe.

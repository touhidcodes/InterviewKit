---
title: Utility Types
description: Leveraging built-in types for easier type manipulation.
---

# TypeScript Utility Types

TypeScript comes with several essential utility types which global definitions can be used to perform some common type transformations.

### 1. `Partial<Type>`

Constructs a type with all properties of `Type` set to optional.

```typescript
interface Todo {
  title: string;
  description: string;
}
// Partial<Todo>: { title?: string; description?: string; }
```

title: Utility Types & Implementation
description: The theory of type manipulation using mapped and conditional types.

---

# Utility Types: Type Manipulation

Utility types in TypeScript are not "built-in" keywords in the compiler. Instead, they are built using the **Type Manipulation Theory** (Mapped Types and Conditional Types).

## 1. Mapped Type Utilities

These utilities transform each property of a type.

### `Partial<T>`

**Theory**: Every property becomes optional (`?`).

```typescript
type Partial<T> = {
  [P in keyof T]?: T[P];
};
```

### `Required<T>`

**Theory**: The `-?` operator removes the optionality from every property.

```typescript
type Required<T> = {
  [P in keyof T]-?: T[P];
};
```

### `Readonly<T>`

**Theory**: The `readonly` modifier is applied to every property.

```typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

### `Record<K, T>`

**Theory**: Maps a union of keys `K` to a specific value type `T`.

```typescript
type Record<K extends keyof any, T> = {
  [P in K]: T;
};
```

## 2. Conditional Type Utilities

These utilities use the `T extends U ? X : Y` logic to filter or transform types.

### `Exclude<T, U>`

**Theory**: Removes types from `T` that are assignable to `U`.

```typescript
type Exclude<T, U> = T extends U ? never : T;

type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
```

_Note: This relies on **Distributive Conditional Types** theory._

### `Pick<T, K>`

**Theory**: Creates a new type by picking a subset of keys `K` from `T`.

```typescript
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
```

### `Omit<T, K>`

**Theory**: The inverse of `Pick`. It combines `Exclude` and `Pick`.

```typescript
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
```

## 3. The `infer` Keyword Theory

The `infer` keyword allows us to "extract" a type from another type during a conditional check.

### `ReturnType<T>`

**Theory**: Inspects a function type and extracts its return type.

```typescript
type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;
```

### `Parameters<T>`

**Theory**: Extracts the arguments of a function as a tuple.

```typescript
type Parameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
```

## Summary Table

| Category         | Utilities                       | Theory Used                      |
| :--------------- | :------------------------------ | :------------------------------- |
| **Modification** | Partial, Required, Readonly     | Mapped Types                     |
| **Selection**    | Pick, Omit, Record              | Mapped Types + Exclude           |
| **Filtering**    | Exclude, Extract, NonNullable   | Conditional Types (Distributive) |
| **Inference**    | ReturnType, Parameters, Awaited | `infer` Keyword                  |

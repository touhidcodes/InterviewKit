---
title: Parametric Polymorphism (Generics)
description: Deep dive into generic types, constraints, and distributivity.
---

# Generics: Parametric Polymorphism

In computer science, **Generics** are a form of **Parametric Polymorphism**. They allow a single piece of code (function, class, or type) to work over multiple types while maintaining strict type safety.

## 1. The Theory of Placeholder Types

A generic type is essentially a "type variable." It holds a spot for a type that will be provided at a later time.

```typescript
function wrapInArray<T>(value: T): T[] {
  return [value];
}
```

**Theory**: `T` is a metadata label. When we call `wrapInArray(10)`, the compiler replaces all instances of `T` with `number`. This is called **Specialization**.

## 2. Generic Constraints (`extends`)

Sometimes a type variable is too broad. We can limit it using the `extends` keyword.

```typescript
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): number {
  return arg.length; // Safe because T MUST have .length
}
```

**Relationship Theory**: `T extends Lengthwise` means `T` must be **assignable** to `Lengthwise`. It can have _more_ properties, but it cannot have _fewer_.

## 3. Distributive Conditional Types

This is a deep theoretical concept in TypeScript. When a generic type `T` is a **naked type parameter** (used alone) in a conditional type, it becomes **distributive** over unions.

```typescript
type ToArray<T> = T extends any ? T[] : never;

type StrOrNumArray = ToArray<string | number>;
// Result: string[] | number[]
```

**How it works**:
Instead of treating `string | number` as a single unit, TypeScript iterates through each part:

1. `string extends any ? string[] : never` -> `string[]`
2. `number extends any ? number[] : never` -> `number[]`
3. Result: `string[] | number[]`

## 4. Generic Defaults

Just like function arguments, type parameters can have defaults.

```typescript
interface APIResponse<T = any> {
  data: T;
  status: number;
}

const defaultRes: APIResponse = { data: "raw", status: 200 }; // T is any
const userRes: APIResponse<User> = { data: someUser, status: 200 }; // T is User
```

## 5. Summary

| Term              | Theoretical Meaning                                                   |
| :---------------- | :-------------------------------------------------------------------- |
| **Parametricity** | The logic is independent of the type.                                 |
| **Instantiation** | The process of replacing `T` with a concrete type.                    |
| **Variance**      | How generic types interact with subtyping (Invariance vs Covariance). |

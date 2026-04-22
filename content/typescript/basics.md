---
title: The TypeScript Type System
description: Understanding structural typing, subtyping, and the type hierarchy.
---

# The TypeScript Type System

Unlike many traditional languages (Java, C#) that use **Nominal Typing**, TypeScript uses a **Structural Type System**. This is the fundamental theory of how TypeScript understands code.

## 1. Structural Typing (Duck Typing)

In a structural type system, if two objects have the same shape, they are considered to be of the same type.

```typescript
interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // OK: point3 has x and y
```

**Theory**: The checker only cares that the _structure_ of `point3` matches `Point`. The extra `z` property doesn't invalidate it. This is often called "Duck Typing": _If it looks like a duck and quacks like a duck, it's a duck._

## 2. Type Hierarchy (The Tree)

TypeScript has a clear hierarchy. Understanding "Top" and "Bottom" types is essential for advanced logic.

### The Top Types (`any`, `unknown`)

Top types can hold any value.

- **`any`**: The "escape hatch." It turns off type checking. It is both a top type and a bottom type simultaneously (unsafe).
- **`unknown`**: The type-safe top type. You can assign anything to it, but you cannot use it without narrowing (e.g., via `typeof` or `instanceof`).

### The Bottom Type (`never`)

The `never` type represents values that **should not exist**.

- Use cases: Functions that always throw, infinite loops, or exhaustive checks in switch statements.
- **Theory**: No value can be assigned to `never` (except `never` itself), but `never` can be assigned to _anything_.

## 3. Subtyping and Assignability

In TS, we say `A` is a subtype of `B` if `A` can be used wherever `B` is expected.

```typescript
type A = { name: string; age: number };
type B = { name: string };

let person: B = { name: "Alice", age: 30 } as A; // OK
```

**Variance Theory**:

- **Covariance**: A more specific type can be assigned to a less specific one (Objects).
- **Contravariance**: Arguments in functions behave oppositely (Function parameters).

## 4. Type Erasure

TypeScript is a **transpiled** language.
**The Theory**: Once the code is compiled to JavaScript, all type annotations are "erased." TypeScript types do not exist at runtime. You cannot use `instanceof MyInterface` because interfaces don't exist in the generated JS.

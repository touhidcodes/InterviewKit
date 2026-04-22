---
title: Interfaces vs Type Aliases
description: Analyzing the structural identity and performance differences.
---

# Interfaces vs Type Aliases: Structural Analysis

While they appear similar, `interface` and `type` have different theoretical implementations in the TypeScript compiler.

## 1. Declaration Merging (The Interface Advantage)

**The Theory**: Interfaces are "open" by design. This allows for **Declaration Merging**, a critical feature for extending third-party libraries or the global scope (e.g., adding a property to `window`).

```typescript
interface User {
  id: string;
}

// In another part of the app
interface User {
  role: string;
}

const user: User = { id: "1", role: "admin" }; // Merged
```

**Constraint**: Type Aliases are "closed." They cannot be changed after creation.

## 2. Structural Identity

An `interface` creates a named type in the compiler's symbol table. A `type` alias is just a name for a specific shape (or union/intersection).

### Performance Theory

In large codebases, **interfaces** generally perform better during type-checking than type aliases.

- **Interfaces**: Cached by the compiler because they are named and stable.
- **Type Aliases**: Checked via structural comparison (flattening), which can be computationally expensive if the types are deeply nested.

## 3. Capabilities Comparison

| Feature                    | Interface         | Type Alias            |
| :------------------------- | :---------------- | :-------------------- |
| **Declaration Merging**    | Yes               | No                    |
| **Primitives**             | No (Objects only) | Yes                   |
| **Unions / Intersections** | No                | Yes                   |
| **Mapped Types**           | No                | Yes                   |
| **Classes can implement**  | Yes               | Yes (if object shape) |

## 4. Emulating Nominal Typing (Branding)

TypeScript is structural, but sometimes you want the compiler to treat a `string` as a `UserId`. We can use **Type Branding** (a theoretical pattern) to achieve this.

```typescript
type Brand<T, TBrand> = T & { __brand: TBrand };

type UserId = Brand<string, "UserId">;
type PostId = Brand<string, "PostId">;

let u: UserId = "123" as UserId;
let p: PostId = "abc" as PostId;

// u = p; // Error: PostId is not assignable to UserId
```

**Theory**: By adding a unique, non-existent property (`__brand`), we force the structural checker to differentiate between two strings.

## 5. Decision Matrix

1. **Use `interface`**:
   - Defining the shape of an object or a class.
   - Creating a public library (allows users to extend your types).
   - When you care about hot-path compiler performance.

2. **Use `type`**:
   - Defining unions, intersections, or tuples.
   - Using advanced features like mapped types or conditional types.
   - Renaming primitives for clarity.

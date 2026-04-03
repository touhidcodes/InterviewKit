---
title: Interfaces vs Types
description: Understand the key differences and when to use each.
---

# Interfaces vs Types in TypeScript

One of the most common interview questions: "What's the difference between an `interface` and a `type` alias?"

### Key Commonalities

- Both can describe an object's shape or a function signature.
- Both can be extended (via `extends` or `&` intersection).
- Both can be used with `implements` in a class.

```typescript
// Interface
interface User {
  name: string;
  age: number;
}

// Type alias
type UserType = {
  name: string;
  age: number;
};
```

### Key Differences

1. **Declaration Merging**: Only `interfaces` support declaration merging. If you define the same interface twice, they merge. Type aliases do not.
   ```typescript
   interface Box {
     height: number;
   }
   interface Box {
     width: number;
   }
   // Box now has both height and width. This is not possible with types.
   ```
2. **Primitive types**: `type` can represent primitives like `string` or `number`, and union/intersection of those. `interface` is limited to object shapes.
   ```typescript
   type ID = string | number; // OK
   // interface ID extends string | number {} // NOT OK
   ```
3. **Computed Properties**: `type` can use computed properties in their definition.
   ```typescript
   type Keys = "name" | "age";
   type UserMap = { [K in Keys]: string }; // Map through types
   ```

### Recommendation

- Use `interface` for public APIs and when you need declaration merging.
- Use `type` for complex types (unions, intersections, conditional types, and mapped types).
- Consistency is key in a project!

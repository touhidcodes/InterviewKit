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

### 2. `Pick<Type, Keys>`

Constructs a type by picking a set of properties `Keys` from `Type`.

```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
type TodoPreview = Pick<Todo, "title" | "completed">;
// TodoPreview: { title: string; completed: boolean; }
```

### 3. `Omit<Type, Keys>`

Constructs a type by picking all properties from `Type` and then removing `Keys`.

```typescript
type TodoInfo = Omit<Todo, "completed">;
// TodoInfo: { title: string; description: string; }
```

### 4. `Readonly<Type>`

Constructs a type with all properties of `Type` set to `readonly`, meaning the properties of the constructed type cannot be reassigned.

```typescript
interface Todo {
  title: string;
}
const todo: Readonly<Todo> = { title: "Delete inactive users" };
// todo.title = "Hello"; // Error: Cannot assign to 'title' because it is a read-only property.
```

### 5. `Record<Keys, Type>`

Constructs an object type whose property keys are `Keys` and whose property values are `Type`.

```typescript
interface CatInfo {
  age: number;
  breed: string;
}
type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
```

### Conclusion

These utility types are incredibly powerful when you want to avoid duplicating type definitions while keeping your code clean and type-safe.

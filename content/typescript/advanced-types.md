---
title: Advanced Algebraic Types
description: Understanding types as sets and logic operations.
---

# Advanced Types: Type Algebra

TypeScript's type system is based on **Set Theory**. A type can be viewed as a set of values. "Advanced" types are operations performed on these sets.

## 1. Union Types (Sum Types)

**The Logic**: `A | B`.
**Theory**: The set of values that are in `A` **OR** in `B`. In type theory, this is called a **Sum Type**.

```typescript
type ID = string | number;
```

**Constraint**: When using a union, you can only safely access properties that exist in **both** types unless you use narrowing.

## 2. Intersection Types (Product Types)

**The Logic**: `A & B`.
**Theory**: The set of values that satisfy both `A` **AND** `B`. This is often called a **Product Type**.

```typescript
type AdminUser = User & Permissions;
```

**Relationship**: Intersections are a way to achieve composition over inheritance.

## 3. Conditional Types (Type Logic)

**The Logic**: `T extends U ? X : Y`.
**Theory**: This is "If-Then-Else" logic for the type system. It allows types to be programmable.

**The `infer` Keyword**:
Allows "pattern matching" within a conditional type to extract a piece of information.

```typescript
type GetType<T> = T extends (infer U)[] ? U : T;
// If T is an array, extract the element type U.
```

## 4. Mapped Types (Transformation)

**The Theory**: A mapped type is a function that iterates over a set of keys and generates a new set of properties.

```typescript
type Options<T> = {
  [P in keyof T]: boolean;
};
```

**Internal Mechanism**: Uses the `keyof` operator to get a union of all property names in `T`, then maps over them.

## 5. Template Literal Types (String Algebra)

**The Theory**: These allow for the algebraic combination of string literals.

```typescript
type Vertical = "top" | "bottom";
type Horizontal = "left" | "right";

type Position = `${Vertical}-${Horizontal}`;
// Result: "top-left" | "top-right" | "bottom-left" | "bottom-right"
```

**Power**: This allows TypeScript to model complex string patterns (like CSS properties or URL paths) with absolute precision.

## 6. Recursive Types

**The Theory**: A type that references itself. Essential for modelling nested data structures like JSON or Trees.

```typescript
type JSONValue =
  | string
  | number
  | boolean
  | null
  | { [key: string]: JSONValue }
  | JSONValue[];
```

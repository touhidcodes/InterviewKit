---
title: Advanced Types
description: Union, Intersection, and Conditional types.
---

# TypeScript Advanced Types

In many situations, simple types aren't enough. TypeScript provides several ways to combine and manipulate types for more sophisticated logic.

### 1. Union Types

Allows a variable to be one of several types.

```typescript
type ID = string | number | string[];
```

### 2. Intersection Types

Combines multiple types into one. This is common when extending existing types with new features.

```typescript
interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}
interface ArtworksData {
  artworks: { title: string }[];
}

type ArtworksResponse = ArtworksData & ErrorHandling;
```

### 3. Conditional Types

A conditional type selects one of two possible types based on a condition expressed as a type relationship test.

```typescript
T extends U ? X : Y
```

Example:

```typescript
type NonNullable<T> = T extends null | undefined ? never : T;
```

### 4. Mapped Types

A mapped type is a generic type which uses a union of `PropertyKey`s to create a type.

```typescript
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;
// FeatureOptions: { darkMode: boolean; newUserProfile: boolean; }
```

### 5. Template Literal Types

Template literal types build on string literal types, and have the same syntax as template literal strings in JavaScript.

```typescript
type World = "world";
type Greeting = `hello ${World}`;
```

Combining with unions:

```typescript
type EmailLocaleIDs = "en" | "es" | "fr";
type FooterLocaleIDs = "footer_en" | "footer_es" | "footer_fr";
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
```

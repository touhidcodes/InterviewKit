---
title: Quick Questions & Answers
description: A collections of quick and commonly asked JavaScript Interview Questions.
---

# rapid-fire JavaScript Questions

### 1. What is the difference between `==` and `===`?

`==` (abstract equality) performs type coercion before comparison. `===` (strict equality) compares both value and type without coercion.

### 2. What is `NaN`?

`NaN` stands for "Not-a-Number". It is a property of the global object. Interestingly, `typeof NaN` returns `"number"`.

### 3. What is the difference between `undefined` and `null`?

`undefined` means a variable has been declared but has not yet been assigned a value. `null` is an assignment value that represents "no value" or "nothing".

### 4. What are the primitive data types in JavaScript?

There are 7 primitive types: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, and `bigint`.

### 5. What is the difference between `var`, `let`, and `const`?

- `var`: Function-scoped, can be re-declared and updated, hoisted with `undefined`.
- `let`: Block-scoped, can be updated but not re-declared, hoisted but in "Temporal Dead Zone".
- `const`: Block-scoped, cannot be updated or re-declared, must be initialized at declaration.

### 6. What is the spread operator `...`?

The spread operator allows an organic way to copy or combine arrays and objects.

```javascript
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]
```

### 7. What is restructuring in JavaScript?

It refers to taking properties from an object and setting them as local variables.

```javascript
const user = { name: "John", age: 25 };
const { name, age } = user;
```

### 8. What is the difference between `Map` and `Object`?

A `Map` preserves the order of keys, allows any type of key (including objects), and is often more performant for frequent additions/removals. An `Object` is more commonly used for static data and is easier to serialize to JSON.

---
title: The This Keyword
description: Mastering this binding and execution context in JavaScript.
---

# The "this" Keyword

In JavaScript, `this` is a keyword that refers to an **object**. Which object it refers to depends on how the function was called.

## The Theory of Binding

The value of `this` is not fixed; it is determined at runtime based on the **Call Site**.

### 1. Default Binding (Global)

In the global scope or in a standalone function call, `this` refers to the global object (`window` in browsers, `global` in Node.js).
_Note: In `strict mode`, this is `undefined` in standalone functions._

```javascript
function showThis() {
  console.log(this);
}
showThis(); // window (non-strict)
```

### 2. Implicit Binding

When a function is called as a method of an object, `this` points to the object "left of the dot".

```javascript
const user = {
  name: "Touhid",
  greet() {
    console.log(this.name);
  },
};
user.greet(); // "Touhid" (this is user)
```

### 3. Explicit Binding (`call`, `apply`, `bind`)

You can force `this` to point to a specific object.

- **call**: Invokes immediately, takes arguments comma-separated.
- **apply**: Invokes immediately, takes arguments as an array.
- **bind**: Returns a _new_ function with `this` permanently bound.

```javascript
function welcome(city) {
  console.log(`Hi ${this.name} from ${city}`);
}
const person = { name: "John" };

welcome.call(person, "Dhaka");
welcome.apply(person, ["Dhaka"]);
const bound = welcome.bind(person);
bound("Sylhet");
```

### 4. `new` Binding

When a function is invoked with the `new` keyword, `this` refers to the newly created object.

```javascript
function Person(name) {
  this.name = name;
}
const me = new Person("Touhid"); // this is me
```

## The Arrow Function Exception

**Theory**: Arrow functions do NOT have their own `this`. Instead, they inherit `this` from their **lexical parent** (the scope where the arrow function was defined).

```javascript
const obj = {
  name: "Outer",
  regular() {
    setTimeout(function () {
      console.log(this.name); // undefined (callback has default binding)
    }, 100);
  },
  arrow() {
    setTimeout(() => {
      console.log(this.name); // "Outer" (inherits this from arrow() FEC)
    }, 100);
  },
};
```

## Priority of Binding (The Rules)

If multiple rules apply, the hierarchy is:

1. `new` binding
2. Explicit binding
3. Implicit binding
4. Default binding

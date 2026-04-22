---
title: Prototypes
description: Understanding prototypal inheritance and the prototype chain in JavaScript.
---

# Prototypes in JavaScript

In JavaScript, inheritance is based on **prototypes**. Unlike class-based languages (like Java or C++), where classes are blueprints for objects, JavaScript objects inherit directly from other objects.

## The Theory of Prototypal Inheritance

### 1. The `[[Prototype]]` link

Every object in JavaScript has an internal property called `[[Prototype]]`. This is the link to its "parent" object. You can access this link via `Object.getPrototypeOf(obj)` or the legacy `__proto__` property.

### 2. The `prototype` Property

This is a source of confusion.

- `[[Prototype]]` is the link **on the object instance**.
- `prototype` is a property **on constructor functions** (and classes). It is the object that will be assigned as `[[Prototype]]` to all instances created by that constructor.

## The Prototype Chain Architecture

When you access a property `obj.prop`:

1. The engine looks for `prop` on `obj` itself.
2. If not found, it follows the `[[Prototype]]` link to the parent.
3. It repeats this until the property is found or it hits `Object.prototype` (the end of the chain).
4. If it reaches `null` (the prototype of `Object.prototype`), it returns `undefined`.

## Memory Efficiency (Why use Prototypes?)

By putting methods on the `prototype` instead of the instance, we save significant memory.

```javascript
function User(name) {
  this.name = name;
  // BAD: Every instance gets its own copy of this function
  this.sayHi = function () {
    console.log(this.name);
  };
}

// GOOD: All instances share a single copy of this function
User.prototype.sayHello = function () {
  console.log(this.name);
};
```

## Shadowing Properties

If an object and its prototype both have a property with the same name, the object's property "shadows" the prototype's.

```javascript
const parent = {
  value: 2,
  method() {
    return this.value + 1;
  },
};
const child = Object.create(parent);

child.value = 4; // Shadowing
console.log(child.method()); // 5
// 'this' in method() refers to 'child', even though method is on 'parent'
```

## ES6 Classes: The "Sugar" Theory

ES6 Classes are not a "new" inheritance model. They are a cleaner syntax for the prototype system.

```javascript
class Animal {}
class Dog extends Animal {}

// Internally:
// Dog.prototype.[[Prototype]] === Animal.prototype
// Dog.[[Prototype]] === Animal (static inheritance)
```

## Key Methods to Remember

- `Object.create(proto)`: Creates a new object with a specific prototype.
- `Object.getPrototypeOf(obj)`: The modern way to get an object's prototype.
- `obj.hasOwnProperty(key)`: Checks if a property belongs to the object itself, not the chain.

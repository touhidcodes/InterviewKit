---
title: Prototypes
description: Explaining Object Prototyping and Inheritance in JavaScript.
---

# Prototypes in JavaScript

In JavaScript, every object has a private property which holds a link to another object called its **prototype**. That prototype object has a prototype of its own, and so on until an object is reached with `null` as its prototype.

By definition, `null` has no prototype, and acts as the final link in this **prototype chain**.

## The Prototypal Chain

When you try to access a property on an object, JavaScript first looks at the object itself. If the property doesn't exist, it checks the object's prototype, then the prototype of THAT prototype, until it finds the property or reaches `null`.

```javascript
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person);

me.name = "John"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// My name is John. Am I human? true
```

## `__proto__` vs `prototype`

- `__proto__` (dunder proto) is a property of every object. It points to the prototype object from which it inherited.
- `prototype` is a property ONLY of constructor functions. It's the object that will be used as `__proto__` for all instances created by that function.

## ES6 Classes (Syntactic Sugar)

JavaScript's `class` keyword is mostly syntactic sugar over prototypal inheritance.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}
```

This is practically the same as creating a constructor function `Animal` and setting `Dog.prototype = Object.create(Animal.prototype)`.

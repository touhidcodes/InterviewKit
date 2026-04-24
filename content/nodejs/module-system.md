---
title: The Node.js Module System
description: CommonJS vs ESM and the internals of how Node.js loads code.
---

# Node.js Module System

Node.js has two module systems: **CommonJS (CJS)** and **ECMAScript Modules (ESM)**. Understanding how they interact is crucial for modern development.

## 1. CommonJS (CJS) Internals

CommonJS is the legacy module system used in Node.js since its inception.

**Theory: The Module Wrapper**
Before a module's code is executed, Node.js wraps it in a function:

```javascript
(function (exports, require, module, __filename, __dirname) {
  // Your module code lives here
});
```

- **Top-level Variables**: Files have their own scope. Variables declared at the top level are local to the module.
- **`require`**: This is a synchronous operation. It reads the file, parses it, and returns the `module.exports`.

## 2. ECMAScript Modules (ESM)

ESM is the standard for JavaScript modules. It uses `import` and `export` statements.

**Theory: Static Analysis**
Unlike CJS, ESM is statically analyzed.

- **Asynchronous**: `import` is asynchronous. The entire module graph is resolved before any code is executed.
- **No Wrapper**: ESM doesn't use the module wrapper. Variables like `__dirname` and `__filename` do not exist (use `import.meta.url` instead).
- **Strict Mode**: ESM is always in strict mode.

## 3. CJS vs. ESM Comparison

| Feature             | CommonJS (CJS)               | ECMAScript Modules (ESM)              |
| :------------------ | :--------------------------- | :------------------------------------ |
| **Keyword**         | `require` / `module.exports` | `import` / `export`                   |
| **Loading**         | Synchronous                  | Asynchronous                          |
| **Native in Node**  | File ext `.js` (default)     | File ext `.mjs` or `"type": "module"` |
| **Top-level Await** | No                           | Yes                                   |
| **Scope**           | Module Wrapper               | Block Scope                           |

## 4. Module Caching Theory

**Theory**: Every module is cached after the first time it is loaded. If you `require` the same file multiple times, you get the exact same object.

- **Singleton Pattern**: Because of caching, you can use modules to share state (Singletons).
- **Invalidation**: Deleting a key from `require.cache` allows you to reload the module, which is how "Hot Module Replacement" (HMR) tools work in development.

## 5. The Search Algorithm

When you `require('something')`:

1.  **Core Modules**: Node.js checks if 'something' is a built-in module (like `fs`).
2.  **Relative Path**: If it starts with `./` or `/`, it looks for that file.
3.  **node_modules**: if not, it looks in the nearest `node_modules` folder, then climbs up the directory tree until it reaches the root.
4.  **Package.json**: Inside a folder, it looks for `package.json` to find the `main` entry point.

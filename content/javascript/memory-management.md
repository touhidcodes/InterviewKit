---
title: Memory Management & Garbage Collection
description: How JavaScript manages memory and the Mark-and-Sweep algorithm.
---

# Memory Management & Garbage Collection

JavaScript automatically allocates memory when objects are created and frees it when they are not used anymore (Garbage Collection). Understanding this "Theory" is crucial for preventing memory leaks in large applications.

## 1. Memory Life Cycle

1.  **Allocate memory**: JavaScript engine handles this when you declare variables.
2.  **Use memory**: Read and write to the variables.
3.  **Release memory**: Handled by the **Garbage Collector (GC)**.

## 2. Memory Heaps and Stacks

- **Stack Memory**: Stores static data (primitive values like numbers, strings, booleans) and function frames. Access is fast.
- **Heap Memory**: Stores objects, arrays, and functions. This is a large, unstructured pool of memory.

## 3. Garbage Collection: Mark-and-Sweep

The primary algorithm used in modern JS engines (V8, SpiderMonkey) is **Mark-and-Sweep**.

### How it works:

1.  **Roots**: The GC starts at the "roots" (global object, local variables in the current stack).
2.  **Marking**: It traverses all roots and their references, marking them as "reachable."
3.  **Sweeping**: Any memory that was _not_ marked as reachable is considered garbage and is reclaimed.

## 4. Common Causes of Memory Leaks

Even with a GC, memory leaks can occur if references are accidentally kept alive.

### A. Global Variables

Accidentally creating globals (e.g., forgetting `let`/`const`) keeps objects in memory forever.

```javascript
function leak() {
  this.bigData = new Array(1000000); // Attached to 'window' in non-strict mode
}
```

### B. Forgotten Timers/Callbacks

If a `setInterval` is running and referencing a large object, that object cannot be collected until the interval is cleared.

### C. Closures

Closures hold onto their outer scope. If a closure is kept in a global array, the entire scope chain it "closed over" stays in memory.

### D. Out of DOM References

Storing a reference to a DOM element in a JS object. Even if the element is removed from the DOM, the JS object keeps it alive.

## 5. Summary Table

| Feature          | Description                           |
| :--------------- | :------------------------------------ |
| **Allocation**   | Automatic at declaration              |
| **Storage**      | Stack (Primitives) vs Heap (Objects)  |
| **GC Algorithm** | Mark-and-Sweep (Reachability)         |
| **Trigger**      | Engine decide when to run (Idle time) |

---
title: React Hooks & State
description: Understanding state, hooks, closures, and lifecycle in React.
---

# React Hooks & State Management

React’s modern architecture revolves around **Hooks**, enabling functional components to manage state and side effects.

At a deeper level, Hooks rely on **JavaScript closures** to persist state across renders.

---

## Theoretical Foundation

### 1. Functional Components & Re-rendering

React components are **pure functions of state → UI**.

- Each render = function execution
- State persists outside the function
- UI recalculates on updates

---

### 2. Closures in React

Each render creates a **new closure**:

- State values are captured per render
- Functions (handlers/effects) reference that snapshot

---

### 3. Render Cycle

1. Component executes  
2. JSX returned  
3. Virtual DOM updated  
4. Diffing algorithm runs  
5. Real DOM updates  

---

## Core Mechanisms

### useState: Persistent State

~~~jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
~~~

### Theory

- State stored internally by React
- Indexed per hook call
- Retrieved on re-render

---

### useEffect: Side Effects

~~~jsx
import { useEffect } from "react";

useEffect(() => {
  console.log("Mounted");

  return () => console.log("Cleanup");
}, []);
~~~

### Theory

- Runs after render
- Cleanup before next run/unmount
- Dependency array controls execution

---

### Dependency Array & Closure Issue

~~~jsx
useEffect(() => {
  console.log(count);
}, []); // stale closure
~~~

**Fix:**

~~~jsx
useEffect(() => {
  console.log(count);
}, [count]);
~~~

---

## Core Concepts

### 1. State is Async

~~~jsx
setCount(count + 1);
setCount(count + 1);
~~~

Fix:

~~~jsx
setCount(prev => prev + 1);
setCount(prev => prev + 1);
~~~

---

### 2. Re-render Triggers

- State updates  
- Props changes  
- Parent re-render  

---

### 3. Avoid Derived State

~~~jsx
// Bad
const [fullName, setFullName] = useState("");

// Good
const fullName = firstName + lastName;
~~~

---

## Real-World Applications

### Custom Hook

~~~jsx
function useCounter() {
  const [count, setCount] = useState(0);
  return { count, increment: () => setCount(c => c + 1) };
}
~~~

---

### Data Fetching

~~~jsx
import { useEffect, useState } from "react";

function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(setData);
  }, []);

  return <div>{data.length}</div>;
}
~~~

---

### Closure Pitfall

~~~jsx
function Example() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setTimeout(() => {
      console.log(count); // stale
    }, 1000);
  }

  return <button onClick={handleClick}>Click</button>;
}
~~~

---

## Common Pitfalls

- Stale closures  
- Infinite loops in useEffect  
- Missing dependencies  

---

## Performance Optimization

- React.memo  
- useMemo  
- useCallback  

~~~jsx
const value = useMemo(() => compute(data), [data]);
~~~

---

## Advanced Patterns

### useReducer

~~~jsx
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 };
    default:
      return state;
  }
}
~~~

---

### Context API

Used for global state without prop drilling.

---

## Mental Model

- UI = f(state)  
- Each render = new closure  
- Hooks = state persistence  
- Effects = side-effect control  

---

## Interview Insights

- Hooks rely on closure behavior  
- State updates are async & batched  
- Dependency arrays control execution  
- Each render has isolated scope  

---

## Next Steps

- React Fiber architecture  
- Concurrent rendering  
- Advanced hook patterns  

---

---
title: React Introduction
description: React architectural foundations and core concepts.
---

# React: Architectural Foundations

React is a declarative JavaScript library for building user interfaces using a component-based architecture.

---

## 1. Design Philosophy: Declarative UI

React follows a **declarative approach**:

- Describe *what UI should look like*
- React handles *how updates happen*

### Core Principles

- Component-based architecture
- Unidirectional data flow
- Virtual DOM
- Reusable logic via hooks

---

## 2. Component Architecture

React apps are built as a **tree of components**.

~~~jsx
function App() {
  return (
    <div>
      <h1>Hello React</h1>
    </div>
  );
}

export default App;
~~~

---

## 3. Props and State

### Props (Read-only input)

~~~jsx
function Greeting({ name }) {
  return <h1>Hello {name}</h1>;
}
~~~

### State (Mutable data)

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

---

## 4. Hooks System

Hooks allow functional components to manage logic.

Common hooks:

- `useState`
- `useEffect`
- `useContext`
- `useReducer`

~~~jsx
import { useEffect } from "react";

useEffect(() => {
  console.log("Component mounted");
}, []);
~~~

---

## 5. Virtual DOM & Reconciliation

### Process:

1. State changes
2. Virtual DOM updates
3. Diffing algorithm runs
4. Real DOM updates efficiently

---

## 6. Component Lifecycle (Hooks-based)

| Phase      | Hook Used        |
|------------|-----------------|
| Mount      | useEffect       |
| Update     | useEffect       |
| Unmount    | Cleanup function|

---

## 7. Data Flow

React uses **one-way data flow**:

Parent → Child via props

---

## 8. State Management

### Local State
- useState
- useReducer

### Global State
- Context API
- Redux / Zustand

---

## 9. Performance Optimization

- Memoization (`React.memo`)
- `useMemo`, `useCallback`
- Code splitting (`React.lazy`)
- Avoid unnecessary re-renders

---

## 10. When to Use React

Use React when:

- Building SPA (Single Page Application)
- No SEO requirement
- Need full flexibility

---

## Next Steps

- Advanced Hooks patterns
- Custom hooks
- State management libraries
- Performance tuning

---

---
title: Context and Hooks
description: Mastering React Hooks and the Context API.
---

# Context and Hooks in React

The **Context API** allows you to share data between components without having to pass props down through every level of the tree.

**Hooks** are functions that let you "hook into" React state and lifecycle features from function components.

## React Hooks Essentials

### 1. `useState`

Manages local state in a component.

```javascript
const [count, setCount] = useState(0);
```

### 2. `useEffect`

Handles side effects like data fetching, subscriptions, or manually changing the DOM.

```javascript
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only runs if count changes
```

### 3. `useContext`

Subscribes to React context.

```javascript
const value = useContext(MyContext);
```

## Mastering the Context API

```javascript
// 1. Create a Context
const ThemeContext = React.createContext("light");

// 2. Provide the Context
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

// 3. Consume the Context
function Toolbar() {
  const theme = useContext(ThemeContext);
  return <div>Current theme: {theme}</div>;
}
```

## Interview Tips

1. **Rule of Hooks**: Only call hooks at the top level and ONLY from React function components.
2. **Exhaustive Dependencies**: Always include all external variables used inside `useEffect` in the dependency array.
3. **Memoization**: Understand `useMemo` and `useCallback` to avoid unnecessary re-renders.

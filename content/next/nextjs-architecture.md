---
title: Next.js Architecture
description: Understanding rendering, routing, and server components in Next.js.
---

# Next.js: Architectural Foundations

Next.js is a **full-stack React framework** that adds routing, rendering strategies, and backend capabilities.

---

## Theoretical Foundation

### 1. Hybrid Rendering Model

Next.js supports:

- SSR (Server-Side Rendering)
- SSG (Static Site Generation)
- ISR (Incremental Static Regeneration)
- CSR (Client-Side Rendering)

---

### 2. Server vs Client Execution

- Server Components → run on server  
- Client Components → run in browser  

---

## Core Mechanisms

### File-Based Routing

~~~text
app/
 ├── page.tsx
 ├── about/page.tsx
 ├── blog/[id]/page.tsx
~~~

---

### Basic Page

~~~tsx
export default function Page() {
  return <h1>Hello Next.js</h1>;
}
~~~

---

### Client Component

~~~tsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
~~~

---

## Rendering Pipeline

1. Request received  
2. Route matched  
3. Server components executed  
4. Data fetched  
5. HTML generated/streamed  
6. Hydration on client  

---

## Data Fetching

### Server-side

~~~tsx
async function getData() {
  const res = await fetch("https://api.example.com");
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return <div>{data.name}</div>;
}
~~~

---

### Client-side

~~~tsx
"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(setData);
  }, []);

  return <div>{data?.name}</div>;
}
~~~

---

## API Routes

~~~text
app/api/users/route.ts
~~~

~~~ts
export async function GET() {
  return Response.json({ users: [] });
}
~~~

---

## Core Concepts

### 1. Server Components

- Default in Next.js
- Reduce JS bundle size
- Improve performance

---

### 2. Hydration

Client attaches event listeners to server-rendered HTML.

---

### 3. Streaming

Partial UI sent progressively to client.

---

## Performance Features

- Automatic code splitting  
- Image optimization  
- Server components  
- Edge rendering  

---

## Common Pitfalls

- Mixing server & client logic incorrectly  
- Overusing client components  
- Improper data fetching strategy  

---

## Mental Model

- Server renders UI first  
- Client hydrates interactivity  
- Data fetching happens close to source  

---

## React vs Next.js

| Feature     | React       | Next.js        |
|------------|------------|---------------|
| Type       | Library     | Framework      |
| Routing    | Manual      | File-based     |
| Rendering  | CSR         | SSR + SSG      |
| Backend    | No          | Yes            |

---

## Interview Insights

- Server Components improve performance  
- Rendering strategy depends on use-case  
- Hydration is critical concept  
- Next.js = React + infrastructure  

---

## Next Steps

- Server Components deep dive  
- Caching & ISR  
- Authentication patterns  
- Edge functions  

---

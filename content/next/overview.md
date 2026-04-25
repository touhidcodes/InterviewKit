---
title: Next.js Introduction
description: Next.js architectural foundations and full-stack capabilities.
---

# Next.js: Architectural Foundations

Next.js is a React framework that provides routing, rendering strategies, and backend capabilities out of the box.

---

## 1. Design Philosophy: Hybrid Framework

Next.js combines:

- Frontend (React)
- Backend (API routes)
- Rendering strategies (SSR, SSG, CSR)

---

## 2. File-Based Routing

Routing is based on the filesystem.

~~~text
app/
 ├── page.tsx           → "/"
 ├── about/page.tsx     → "/about"
 ├── blog/[id]/page.tsx → "/blog/:id"
~~~

---

## 3. Basic Page Example

~~~tsx
export default function Page() {
  return <h1>Hello Next.js</h1>;
}
~~~

---

## 4. Rendering Strategies

### SSR (Server-Side Rendering)
- Runs on every request

### SSG (Static Site Generation)
- Built at compile time

### ISR (Incremental Static Regeneration)
- Updates after deployment

### CSR (Client-Side Rendering)
- Runs in browser

---

## 5. Server vs Client Components

### Server Component (default)

~~~tsx
export default function Page() {
  return <h1>Server Component</h1>;
}
~~~

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

## 6. Data Fetching

### Server-side (Recommended)

~~~tsx
async function getData() {
  const res = await fetch("https://api.example.com/data");
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
    fetch("/api/data")
      .then(res => res.json())
      .then(setData);
  }, []);

  return <div>{data?.name}</div>;
}
~~~

---

## 7. API Routes (Backend)

### File Structure

~~~text
app/api/users/route.ts
~~~

### Example

~~~ts
export async function GET() {
  return Response.json({ users: [] });
}
~~~

---

## 8. Request Lifecycle

1. Request received
2. Route matched (filesystem)
3. Server component execution
4. Data fetching
5. HTML generation/streaming
6. Hydration on client

---

## 9. Performance Features

- Automatic code splitting
- Image optimization (`next/image`)
- Font optimization
- Server Components
- Streaming & Suspense

---

## 10. When to Use Next.js

Use Next.js when:

- SEO is required
- Need SSR/SSG
- Want backend + frontend together
- Need performance optimizations

---

## 11. React vs Next.js

| Feature        | React        | Next.js                |
|---------------|-------------|------------------------|
| Type          | Library      | Framework              |
| Routing       | Manual       | File-based             |
| Rendering     | CSR          | SSR + SSG + CSR        |
| Backend       | No           | Yes (API routes)       |

---

## Next Steps

- Server Components deep dive
- Layout & nested routing
- Caching & ISR
- Authentication systems

---

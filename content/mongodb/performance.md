---
title: Performance Optimization
description: MongoDB performance interview questions and answers.
---

# MongoDB Performance (Interview Q&A)

## 1. How do you improve MongoDB performance?

- Use indexes  
- Optimize queries  
- Use projections  
- Avoid large documents  

---

## 2. What is query optimization?
Improving query efficiency to reduce execution time.

---

## 3. What is covered query?
A query that uses only indexes without scanning documents.

---

## 4. What is explain()?

    db.users.find({ name: "John" }).explain("executionStats")

Used to analyze query performance.

---

## 5. What is indexing impact?

- Faster reads  
- Slower writes  

---

## 6. What is pagination?
Retrieving data in chunks.

---

## 7. How do you handle large data?

- Use sharding  
- Use aggregation  
- Optimize schema  

---

## 8. What is caching?
Storing frequently accessed data in memory.

---

## Summary

Performance optimization is critical for scalable and efficient MongoDB applications.

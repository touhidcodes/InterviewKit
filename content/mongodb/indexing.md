---
title: Indexing & Performance
description: MongoDB indexing interview questions and answers.
---

# MongoDB Indexing (Interview Q&A)

## 1. What is an index in MongoDB?
An index is a data structure that improves the speed of query execution.

---

## 2. How do you create an index?

    db.users.createIndex({ name: 1 })

---

## 3. What are the types of indexes?

- Single field index  
- Compound index  
- Multikey index (arrays)  
- Text index  
- Geospatial index  

---

## 4. What is a compound index?
An index on multiple fields.

Example:

    db.users.createIndex({ name: 1, age: -1 })

---

## 5. What is a multikey index?
Used when indexing array fields.

---

## 6. What is a text index?
Used for full-text search.

---

## 7. What are the benefits of indexing?

- Faster query performance  
- Efficient sorting  
- Reduced scan operations  

---

## 8. What are the drawbacks?

- Increased storage usage  
- Slower write operations  

---

## 9. How do you analyze query performance?

    db.users.find({ name: "John" }).explain("executionStats")

---

## 10. What is index cardinality?
Cardinality refers to the uniqueness of values in a field.

---

## Summary

Indexes are critical for optimizing MongoDB performance but should be used carefully to balance read and write efficiency.

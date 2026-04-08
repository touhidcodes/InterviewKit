---
title: Data Modeling
description: MongoDB data modeling interview questions and answers.
---

# MongoDB Data Modeling (Interview Q&A)

## 1. What is data modeling in MongoDB?
Data modeling is the process of structuring data in collections and documents based on application requirements and query patterns.

---

## 2. What is embedding in MongoDB?
Embedding means storing related data inside a single document.

Example:

    {
      "name": "John",
      "orders": [
        { "product": "Book", "price": 10 }
      ]
    }

---

## 3. What is referencing?
Referencing means storing relationships using IDs between documents.

Example:

    {
      "userId": "123",
      "orderId": "456"
    }

---

## 4. When should you use embedding?
- One-to-one relationships  
- One-to-few relationships  
- When data is frequently read together  

---

## 5. When should you use referencing?
- One-to-many relationships  
- Many-to-many relationships  
- When data grows large or changes frequently  

---

## 6. What is denormalization?
Denormalization means combining related data into a single document to reduce joins.

---

## 7. What is normalization?
Normalization means separating data into multiple collections to reduce redundancy.

---

## 8. What is the document size limit?
Maximum document size in MongoDB is 16MB.

---

## 9. What are best practices for data modeling?

- Design based on query patterns  
- Avoid deeply nested documents  
- Keep documents small and efficient  
- Use indexing where necessary  
- Balance between embedding and referencing  

---

## 10. Why is data modeling important?

- Improves performance  
- Reduces query complexity  
- Ensures scalability  

---

## Summary

Good data modeling in MongoDB ensures efficient queries, better performance, and scalable applications.

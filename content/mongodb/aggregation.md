---
title: Aggregation Framework
description: MongoDB aggregation interview questions and answers.
---

# MongoDB Aggregation (Interview Q&A)

## 1. What is aggregation in MongoDB?
Aggregation is used to process and transform data through pipelines.

---

## 2. What is an aggregation pipeline?
A sequence of stages that process documents step by step.

---

## 3. Example of aggregation:

    db.orders.aggregate([
      { $match: { status: "completed" } },
      { $group: { _id: "$userId", total: { $sum: "$amount" } } }
    ])

---

## 4. What does $match do?
Filters documents (similar to WHERE in SQL).

---

## 5. What does $group do?
Groups data and performs aggregation operations.

---

## 6. What does $sort do?
Sorts documents.

---

## 7. What does $project do?
Selects and reshapes fields.

---

## 8. What is $lookup?
Performs a join between collections.

---

## 9. What are common use cases?

- Analytics  
- Reporting  
- Data transformation  

---

## 10. Difference between aggregation and find?

- find → simple queries  
- aggregation → complex data processing  

---

## Summary

Aggregation is a powerful feature for transforming and analyzing MongoDB data efficiently.

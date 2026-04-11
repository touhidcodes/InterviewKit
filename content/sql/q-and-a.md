---
title: Quick Questions & Answers
description: General SQL interview questions and answers.
---

# SQL Quick Questions & Answers

## 1. What is SQL?

SQL (Structured Query Language) is used to communicate with and manipulate databases.

---

## 2. What are the differences between DDL, DML, DCL, and TCL?

- **DDL (Data Definition Language):** Defines structure (CREATE, ALTER, DROP, TRUNCATE).
- **DML (Data Manipulation Language):** Manipulates data (INSERT, UPDATE, DELETE, SELECT).
- **DCL (Data Control Language):** Controls access (GRANT, REVOKE).
- **TCL (Transaction Control Language):** Manages transactions (COMMIT, ROLLBACK, SAVEPOINT).

---

## 3. Difference between DELETE and TRUNCATE?

- **DELETE** is a DML command; it can have a WHERE clause and removes row by row, recording each in the transaction log.
- **TRUNCATE** is a DDL command; it cannot have a WHERE clause and removes all rows quickly by deallocating pages, logging the page deallocation.

---

## 4. Difference between WHERE and HAVING?

- **WHERE** applies conditions to individual rows _before_ grouping.
- **HAVING** applies conditions to aggregate results _after_ grouping (GROUP BY).

---

## 5. What is a Primary Key?

A primary key is a column (or set of columns) that uniquely identifies each row in a table. It cannot be null and must contain unique values.

---

## 6. What is a Foreign Key?

A foreign key is a column that creates a link between two tables. It references the primary key of another table to maintain referential integrity.

---

## 7. What is a Unique constraint?

A unique constraint ensures all values in a column are different. Unlike a primary key, a table can have multiple unique keys, and they can typically accept a single NULL value (depending on the RDBMS).

---

## 8. What is a SQL View?

A view is a virtual table based on the result-set of an SQL statement. It doesn't store data itself but displays data stored in other tables.

---

## 9. What is the difference between UNION and UNION ALL?

- **UNION** combines the result sets of two queries and removes duplicates.
- **UNION ALL** combines result sets but keeps duplicates, making it faster.

---

## 10. What is a Subquery?

A subquery is a query nested inside another query (like SELECT, INSERT, UPDATE, or DELETE). It's typically used to return data that will be used in the main query as a condition to further restrict the data to be retrieved.

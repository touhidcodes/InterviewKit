---
title: Indexing & Performance
description: Learn about Indexing and SQL Performance Optimization.
---

# Indexing & Performance (Interview Q&A)

## 1. What is an Index in SQL?

An index is a database object created on a column (or columns) of a table to improve the speed of data retrieval operations. It works similarly to an index in a book.

---

## 2. Default Index in a table?

When a Primary Key is created, the database automatically creates a Unique Clustered Index on that column.

---

## 3. Clustered vs. Non-Clustered Index?

- **Clustered Index:** Defines the physical sorting order of data rows in the table. Because data can only be sorted one way, a table can have only one Clustered Index.
- **Non-Clustered Index:** Does not alter the physical order of the table. Instead, it creates a separate logical lookup structure containing pointers back to the original rows. A table can have multiple non-clustered indexes.

---

## 4. What is a Composite Index?

An index created on two or more columns in a table. It's useful when queries frequently filter by multiple columns simultaneously.

---

## 5. Disadvantages of Indexes?

- Indexes take up additional disk space.
- They slow down data modification statements (INSERT, UPDATE, DELETE) because the index must also be updated whenever the table data is modified.

---

## 6. What is the execution plan / EXPLAIN plan?

An execution plan (or EXPLAIN query) shows how the database engine plans to execute an SQL statement. It details whether it scans the entire table or uses an index, and is vital for diagnosing slow queries.

---

## 7. What is an N+1 Query Problem?

A performance anti-pattern often produced by ORMs, where an initial query fetches a list of N parent records, and then N separate queries are executed to fetch the corresponding child records, leading to poor performance.

---

## 8. How to optimize a slow SQL query?

- Ensure the columns in `WHERE`, `JOIN`, and `ORDER BY` clauses are indexed.
- Avoid using `SELECT *` (fetch only necessary columns).
- Avoid applying functions to columns in the `WHERE` clause (which prevents index usage).
- Run an EXPLAIN plan to detect full table scans.
- Use `LIMIT` to restrict returned rows if dealing with large datasets.

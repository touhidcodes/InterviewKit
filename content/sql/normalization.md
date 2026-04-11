---
title: Normalization
description: Understand Database Normalization concepts.
---

# Normalization (Interview Q&A)

## 1. What is Normalization?

Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. It involves dividing large tables into smaller, linked tables.

---

## 2. What are the normal forms?

- **1NF (First Normal Form):** Ensures each column contains atomic (indivisible) values and each record is unique.
- **2NF (Second Normal Form):** Must be in 1NF, and all non-key attributes must be fully functionally dependent on the entire primary key (no partial dependency).
- **3NF (Third Normal Form):** Must be in 2NF, and there must be no transitive dependency (non-key attributes cannot depend on other non-key attributes).
- **BCNF (Boyce-Codd Normal Form):** A stricter version of 3NF where every determinant must be a candidate key.

---

## 3. What is Denormalization?

Denormalization is the process of intentionally adding redundant data to normalized databases to improve read performance. It's often used in Data Warehousing and OLAP systems where fast querying is more important than fast writes or strict space conservation.

---

## 4. Difference between Normalization and Denormalization?

- **Normalization:** Minimizes redundancy, optimizes for write operations, keeps data integrity high, but requires complex joins for reads.
- **Denormalization:** Increases redundancy, optimizes for read operations, requires fewer joins, but writes are slower because multiple values must be updated to keep data consistent.

---

## 5. What is a Candidate Key?

A set of attributes that can uniquely identify a database record. A table can have multiple candidate keys, but one is chosen as the Primary Key.

---

## 6. What is a Composite Key?

A combination of two or more columns in a table that can be used to uniquely identify each row in the table.

---

## 7. What is an Anomaly?

An anomaly is an inconsistency in the database that occurs due to poor design (unnormalized tables).

- **Update Anomaly:** When data needs to be updated but it exists in multiple rows, risking partial updates.
- **Insertion Anomaly:** When certain data cannot be inserted into the database without the presence of other data.
- **Deletion Anomaly:** When deleting a record accidentally deletes other required information.

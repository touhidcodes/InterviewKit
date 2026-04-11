---
title: SQL Joins
description: Learn about the different types of SQL Joins.
---

# SQL Joins (Interview Q&A)

## 1. What is an SQL Join?

A JOIN clause is used to combine rows from two or more tables, based on a related column between them.

---

## 2. What are the different types of Joins in SQL?

- **INNER JOIN:** Returns records that have matching values in both tables.
- **LEFT (OUTER) JOIN:** Returns all records from the left table, and the matched records from the right table.
- **RIGHT (OUTER) JOIN:** Returns all records from the right table, and the matched records from the left table.
- **FULL (OUTER) JOIN:** Returns all records when there is a match in either left or right table.
- **CROSS JOIN:** Returns the Cartesian product of the two tables (every row of the first table combined with every row of the second table).
- **SELF JOIN:** A regular join, but the table is joined with itself.

---

## 3. What is a Left Join? Give an example.

A LEFT JOIN returns all rows from the left table, even if there are no matches in the right table. The result is NULL for the right side if there is no match.

    SELECT Customers.CustomerName, Orders.OrderID
    FROM Customers
    LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID;

---

## 4. What is the difference between INNER JOIN and LEFT JOIN?

An INNER JOIN only returns rows where the join condition matches in _both_ tables. A LEFT JOIN returns _all_ rows from the left table, plus matched rows from the right, filling in NULLs for the right table columns where there is no match.

---

## 5. What is a Cross Join?

A CROSS JOIN generates a Cartesian product. If Table A has 5 rows and Table B has 4 rows, a CROSS JOIN will result in 20 rows. It does not require an `ON` clause.

---

## 6. How is a SELF JOIN useful?

A SELF JOIN is useful for querying hierarchical data or comparing rows within the same table. For example, finding employees and their managers from a single `Employees` table where `ManagerID` references `EmployeeID`.

    SELECT A.EmployeeName AS Employee, B.EmployeeName AS Manager
    FROM Employees A, Employees B
    WHERE A.ManagerID = B.EmployeeID;

---

## 7. What happens if you forget the ON clause in a JOIN?

If you forget the `ON` clause in a standard JOIN (like INNER JOIN), many SQL databases will throw a syntax error. However, if using older syntax (joining by comma), omitting the `WHERE` clause results in a Cartesian product (CROSS JOIN), severely impacting performance and returning mostly incorrect data combinations.

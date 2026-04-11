---
title: ACID & Transactions
description: Learn about ACID properties and transaction management in SQL.
---

# ACID & Transactions (Interview Q&A)

## 1. What does ACID stand for?

- **Atomicity:** The entire transaction takes place at once or doesn't happen at all (all-or-nothing rule).
- **Consistency:** The database must remain in a consistent state before and after the transaction.
- **Isolation:** Multiple transactions occur independently without interference.
- **Durability:** The changes of a successful transaction occur even if the system failure occurs.

---

## 2. What is a Transaction?

A transaction is a single logical unit of work that contains one or more SQL statements (like a transfer of funds in a bank involving an update to two accounts).

---

## 3. What is a ROLLBACK?

ROLLBACK is used to undo transactions that have not yet been saved to the database. It restores the database to its state at the beginning of the transaction or up to a specific SAVEPOINT.

---

## 4. What is a COMMIT?

COMMIT is used to permanently save all changes made in the current transaction.

---

## 5. What are the different isolation levels?

- **Read Uncommitted:** A transaction may read data that is still uncommitted by other transactions (Dirty Read).
- **Read Committed:** A transaction can only read data that has been committed.
- **Repeatable Read:** Ensures that if a row is read twice in the same transaction, the values will be the same.
- **Serializable:** The strictest level. Transactions are completely isolated from one another, usually achieved by locking the read/write records.

---

## 6. What is a Deadlock?

A deadlock occurs when two or more transactions continuously wait for the other to release locks it needs, preventing both from proceeding. Databases generally detect deadlocks and kill one of the transactions (the victim) to resolve them.

---
title: Transactions
description: MongoDB transactions interview questions and answers.
---

# MongoDB Transactions (Interview Q&A)

## 1. What is a transaction?
A transaction is a set of operations executed as a single unit.

---

## 2. What properties do transactions follow?
ACID properties:
- Atomicity  
- Consistency  
- Isolation  
- Durability  

---

## 3. Example of transaction:

    const session = client.startSession()

    session.startTransaction()

    try {
      await db.collection("users").insertOne({ name: "John" }, { session })
      await session.commitTransaction()
    } catch (error) {
      await session.abortTransaction()
    }

---

## 4. When should you use transactions?

- Financial operations  
- Multi-document updates  
- Critical data consistency  

---

## 5. Are transactions supported in MongoDB?
Yes, in replica sets and sharded clusters.

---

## 6. What is session in MongoDB?
A session is required to execute a transaction.

---

## 7. What happens if a transaction fails?
All operations are rolled back.

---

## Summary

Transactions ensure data consistency in complex operations but should be used only when necessary due to performance overhead.

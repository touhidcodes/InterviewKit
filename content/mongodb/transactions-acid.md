---
title: Transactions & ACID
description: How MongoDB handles multi-document atomicity and consistency.
---

# Transactions and ACID Compliance

Historically, MongoDB only supported atomic operations on a single document. However, since version 4.0, it supports **multi-document ACID transactions** for replica sets, and since 4.2 for sharded clusters.

## 1. Transaction Theory in MongoDB

**Theory**: MongoDB transactions are designed to provide the same ACID (Atomicity, Consistency, Isolation, Durability) guarantees as traditional relational databases.

- **Atomicity**: Either all operations in the transaction succeed, or none are applied.
- **Isolation**: MongoDB uses **Snapshot Isolation**. When a transaction starts, it "sees" a consistent snapshot of the data. Other operations outside the transaction cannot see the changes until the transaction is committed.

## 2. Read and Write Concerns

The level of consistency is controlled by "Concerns."

### Write Concern (`w`)

Describes the level of acknowledgment requested from MongoDB for write operations.

- `w: 1`: Acknowledgment from Primary only (default).
- `w: "majority"`: Acknowledgment from a majority of the replica set members. **Highly recommended for transactions.**

### Read Concern (`level`)

Controls what data is returned to the client.

- `local`: Returns data from the instance, regardless of whether it has been acknowledged by a majority.
- `majority`: Returns data that has been acknowledged by a majority of the replica set.
- `snapshot`: Used specifically for transactions to ensure a consistent view.

## 3. The WiredTiger Ticket System

**Theory**: WiredTiger uses a **Ticket System** to manage concurrency.

- There are a fixed number of read and write tickets (default 128 each).
- Every operation must acquire a ticket. If no tickets are available, the operation waits. This prevents the system from being overwhelmed by too many concurrent threads.

## 4. Multi-Document Transaction Limits

While powerful, transactions come with a performance cost:

- **Lifetime**: Transactions have a default 60-second limit to prevent long-running tasks from locking the `oplog`.
- **Payload**: Transactions should not modify a massive number of documents. If you need to update millions of rows, it's better to do it in batches outside a transaction.

## 5. Causal Consistency

**Theory**: Causal consistency ensures that the order of operations is preserved. If application A writes data and then application B reads it, B is guaranteed to see A's write (Read-Your-Writes). This is achieved through **Logical Session Identifiers (lsid)** and **Cluster Time**.

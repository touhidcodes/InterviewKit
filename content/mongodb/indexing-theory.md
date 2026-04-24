---
title: Indexing Theory
description: Understanding B-Trees, Compound Indexes, and the ESR Rule.
---

# MongoDB Indexing Theory

Indexes are special data structures that store a small portion of the collection's data set in an easy-to-traverse form. Without indexes, MongoDB must perform a **collection scan** (scanning every document) to select those documents that match the query.

## 1. Under the Hood: B-Trees

MongoDB uses **B-Tree** data structures for its indexes.

- **Theory**: A B-Tree keeps data sorted and allows searches, sequential access, insertions, and deletions in logarithmic time. The index stores the value of a specific field or set of fields, ordered by the value of the field.

## 2. The ESR Rule (Equality, Sort, Range)

This is the golden rule for designing **Compound Indexes**.

1. **Equality**: Field(s) that will be matched against a single value (e.g., `status: "active"`).
2. **Sort**: Field(s) that determine the order of the results.
3. **Range**: Field(s) that will be matched against a range (e.g., `age: { $gt: 18 }`).

**Theory**: By following the ESR order in your compound index, MongoDB can filter the data, sort it using the index structure, and then apply range filters without needing an in-memory sort (**Blocking Sort**).

## 3. Index Types

### Single Field Index

The simplest index on a single key. MongoDB automatically creates a unique index on the `_id` field.

### Compound Index

An index on multiple fields. The **order of fields** matters. An index on `{ a: 1, b: 1 }` can support queries on `a` and `a, b`, but NOT queries on only `b` (unless the engine uses an index skip scan).

### Multikey Index

Created when you index a field that holds an array. MongoDB creates an index key for **each element** in the array.

- **Limit**: You cannot create a compound multikey index where more than one field is an array (to avoid Cartesian product explosion).

### TTL (Time-To-Live) Index

Special single-field indexes that MongoDB uses to automatically remove documents from a collection after a certain amount of time.

## 4. Partial and Sparse Indexes

### Sparse Index

Only contains entries for documents that have the indexed field.

- **Theory**: Saves space if many documents lack the field.

### Partial Index

Only indexes documents that meet a specified filter expression.

- **Theory**: More powerful and flexible than sparse indexes. You can index only "active" users, reducing index size and improving write performance.

## 5. Covered Queries

**Theory**: A query is "covered" if the index contains all the fields returned by the query. MongoDB can return the results directly from the index without ever looking at the actual document on disk.

```javascript
// Index: { name: 1, status: 1 }
db.users.find({ name: "Touhid" }, { name: 1, _id: 0 });
```

Since `name` is in the index and we excluded `_id` (which is not in this specific index), this is a **Covered Query**.

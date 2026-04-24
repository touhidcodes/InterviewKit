---
title: Data Modeling Theory
description: The art of balancing embedding vs referencing and advanced document patterns.
---

# MongoDB Data Modeling

Data modeling in MongoDB is driven by the application's **query patterns**. Unlike SQL, where you normalize data and join at runtime, MongoDB encourages designing documents that provide the data the application needs in a single IO operation.

## 1. Embedding vs. Referencing

This is the most critical decision in MongoDB schema design.

### Embedding (Denormalization)

Storing related data in the same document.

```json
{
  "_id": 1,
  "name": "Touhid",
  "addresses": [
    { "city": "Dhaka", "zip": "1200" },
    { "city": "Sylhet", "zip": "3100" }
  ]
}
```

- **Theory**: Use embedding when you have **one-to-one** or **one-to-few** relationships, or when the data is almost always read together. It minimizes disk seeks.
- **Limit**: Documents have a **16MB limit**. Avoid embedding if the array can grow boundlessly (e.g., comments on a viral post).

### Referencing (Normalization)

Storing relationships using `ObjectId` references.

- **Theory**: Use referencing for **one-to-many** (where 'many' is large) or **many-to-many** relationships. It prevents the "Monomorphic Document" problem where documents become too large to manage.

## 2. Relationships Meta-Strategy

| Relationship Type | Recommended Strategy                      |
| :---------------- | :---------------------------------------- |
| One-to-One        | Embed                                     |
| One-to-Few        | Embed                                     |
| One-to-Many       | Reference                                 |
| One-to-Squillion  | Parent Reference (Child stores Parent ID) |
| Many-to-Many      | Reference (Two-way or One-way)            |

## 3. Advanced Design Patterns

### The Extended Reference Pattern

Instead of just storing an ID, you store a few fields from the referenced document that you frequently need for display.

**Theory**: This reduces the need for `$lookup` (joins) in 90% of use cases. You only perform a join if you need the full data of the referenced entity.

### The Bucket Pattern

Useful for time-series data. Instead of one document per measurement, you store measurements for a span (e.g., one hour) in a single document's array.

**Theory**: This reduces the total number of documents and the size of the index, improving performance for range queries.

### The Outlier Pattern

If most documents have a small number of relationships but a few have thousands, you store the "overflow" in a separate collection.

**Theory**: This prevents common documents from being penalized (in terms of size and processing) by the edge cases of "whale" documents.

## 4. Atomicity and Consistency

**Theory**: MongoDB guarantees **Atomicity at the Document Level**. When you embed data, a single write operation can update all related information atomically without the need for multi-document transactions (though they are supported since 4.0).

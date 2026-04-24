---
title: Aggregation Framework
description: The pipeline pattern for data transformation and analytics.
---

# MongoDB Aggregation Framework

The Aggregation Framework is a powerful tool for data processing and analysis. It uses a **pipeline** concept, where documents enter a multi-stage pipeline that transforms the documents into aggregated results.

## 1. The Pipeline Concept

**Theory**: Each stage in the pipeline performs an operation on the input documents. The output of one stage becomes the input to the next.

```javascript
db.orders.aggregate([
  { $match: { status: "A" } }, // Stage 1: Filter
  { $group: { _id: "$cust_id", total: { $sum: "$amount" } } }, // Stage 2: Group
  { $sort: { total: -1 } }, // Stage 3: Sort
]);
```

## 2. Core Stages

### `$match` (Filtering)

Filters the documents to pass only the documents that match the specified condition(s) to the next pipeline stage.

- **Optimization**: Always place `$match` as early as possible to reduce the number of documents processed in later stages.

### `$project` (Reshaping)

Passes along the documents with the requested fields to the next stage in the pipeline. You can add new fields or remove existing ones.

### `$group` (Summarizing)

Groups documents by a specified identifier expression and applies accumulator expressions (like `$sum`, `$avg`, `$push`) to each group.

- **Memory Limit**: This stage has a **100MB** RAM limit. If exceeded, you must use `{ allowDiskUse: true }`.

### `$lookup` (Left Outer Join)

Performs a join to another collection in the same database to filter in documents from the "joined" collection.

- **Theory**: It produces an array field for each matching document from the joined collection.

## 3. The Accumulators

Accumulators are operators that maintain state as documents progress through the pipeline.

- `$push`: Returns an array of all values that result from applying an expression to documents.
- `$addToSet`: Returns an array of unique values.
- `$facet`: Processes multiple aggregation pipelines within a single stage on the same set of input documents. Excellent for building "faceted search" (like Amazon categories).

## 4. Pipeline Optimization Theory

1. **Predicate Pushdown**: MongoDB attempts to move `$match` stages to the beginning of the pipeline to leverage indexes.
2. **Index Usage**: Only the `$match` and `$sort` stages at the **beginning** of the pipeline can use indexes.
3. **Project Splitting**: If you only need a few fields, using `$project` early can reduce the amount of data flowing through the pipeline, saving memory and CPU.

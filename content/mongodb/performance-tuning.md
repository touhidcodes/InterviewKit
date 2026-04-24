---
title: Performance Tuning
description: Profiling, Explain plan analysis, and optimization strategies.
---

# Performance Tuning and Optimization

Optimizing MongoDB requires a deep understanding of how the engine executes queries and interacts with the hardware.

## 1. The `explain()` Method

**Theory**: The `explain` command provides information on the query plan. It has three verbosity levels:

- `queryPlanner`: Shows the winning plan selected by the optimizer.
- `executionStats`: Shows how the winning plan performed (docs scanned, time taken).
- `allPlansExecution`: Shows performance stats for all considered plans.

### Key Metrics to Watch

- **COLLSCAN**: A collection scan was performed (bad for large datasets).
- **IXSCAN**: An index scan was performed (generally good).
- **docsExamined vs nReturned**: If `docsExamined` is much higher than `nReturned`, your index is not selective enough.
- **stage: SORT**: Indicates an in-memory sort (**Blocking Sort**). This should be avoided by using index-driven sorting.

## 2. Working Set Theory

**Theory**: The **Working Set** is the portion of your data and indexes that are frequently accessed.

- For optimal performance, the Workign Set should fit entirely in **RAM**.
- If it doesn't, MongoDB will be forced to perform frequent disk reads (Page Faults), which are orders of magnitude slower.

## 3. The Query Optimizer

MongoDB's optimizer is **empirical**.

1. When a query is run, it selects multiple possible plans.
2. It runs them in parallel for a short period.
3. The plan that finishes first "wins" and is cached.
4. The cache is invalidated if the collection changes significantly or the index is modified.

## 4. Hardware Optimization

- **Disk I/O**: Use SSDs for high IOPS. MongoDB is very sensitive to disk latency.
- **CPU**: Aggregation and Map-Reduce are CPU intensive. More cores help with concurrent operations.
- **Memory**: The more RAM, the larger the working set that can be cached in the WiredTiger cache.

## 5. Profiling

MongoDB includes a database profiler that records information about queries.

- `Level 0`: Off.
- `Level 1`: Records operations that take longer than `slowms`.
- `Level 2`: Records all operations.

**Tip**: Always run at level 1 in production with a reasonable `slowms` (e.g., 100ms) to identify bottleneck queries without overwhelming the system.

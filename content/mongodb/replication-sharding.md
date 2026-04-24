---
title: Replication & Sharding
description: High availability and horizontal scaling architectures.
---

# Scaling MongoDB: Replication and Sharding

MongoDB provides two primary mechanisms for scaling and availability: **Replication** (Vertical scaling of availability) and **Sharding** (Horizontal scaling of capacity).

## 1. Replication (High Availability)

A **Replica Set** is a group of `mongod` instances that maintain the same data set.

### Components

- **Primary**: Receives all write operations. All changes are recorded in the **Oplog (Operation Log)**.
- **Secondary**: Replicates the Primary's oplog and applies the operations to their data sets.
- **Arbiter**: Does not store data. Its only purpose is to participate in elections to break ties.

### Election Theory

If the Primary becomes unavailable, the secondaries hold an election to choose a new Primary.

- **Heartbeats**: Nodes send pings to each other every 2 seconds. If a node doesn't respond for 10 seconds, it's considered down.
- **Quorum**: A majority of the total members must be present to elect a Primary.

## 2. Sharding (Horizontal Scaling)

Sharding is the process of storing data records across multiple machines. It is MongoDB's approach to meeting the demands of data growth.

### The Sharded Cluster Architecture

- **Shards**: Each shard contains a subset of the sharded data. Shards must be deployed as Replica Sets.
- **Config Servers**: Store metadata and configuration settings for the cluster (e.g., where each chunk of data lives).
- **Mongos (Router)**: Acts as a query router, providing an interface between client applications and the sharded cluster.

## 3. Shard Keys and Data Distribution

**Theory**: The **Shard Key** determines the distribution of the collection's documents among the cluster's shards.

### Ranged Sharding

Divides data into ranges based on the shard key values.

- **Pros**: Efficient for range-based queries on the shard key.
- **Cons**: Can lead to "hotspots" if the shard key is monotonically increasing (like a timestamp).

### Hashed Sharding

Uses a hashed index of the shard key to partition data.

- **Pros**: Ensures an even distribution of data across shards.
- **Cons**: Range-based queries on the shard key will likely require a "scatter-gather" operation (hitting all shards).

## 4. The CAP Theorem in MongoDB

**Theory**: In the event of a network partition (P), MongoDB generally prioritizes **Consistency (C)** over **Availability (A)**.

- During a Primary election, the set is unavailable for writes, upholding consistency by ensuring only one node can be Primary at a time.
- However, by configuring `Read Preference`, you can choose to read from secondaries (Eventual Consistency), moving towards Availability.

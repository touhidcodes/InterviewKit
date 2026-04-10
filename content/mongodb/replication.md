---
title: Replication
description: MongoDB replication interview questions and answers.
---

# MongoDB Replication (Interview Q&A)

## 1. What is replication in MongoDB?
Replication is the process of maintaining multiple copies of data across different servers.

---

## 2. What is a replica set?
A replica set is a group of MongoDB servers that maintain the same dataset.

---

## 3. What are the components of a replica set?

- Primary node  
- Secondary nodes  
- Arbiter (optional)  

---

## 4. What is a primary node?
The node that receives all write operations.

---

## 5. What is a secondary node?
Nodes that replicate data from the primary and serve read operations (optional).

---

## 6. What is an arbiter?
A node that participates in elections but does not store data.

---

## 7. What is automatic failover?
If the primary node fails, a secondary node is automatically elected as the new primary.

---

## 8. What is data redundancy?
Storing multiple copies of data to prevent data loss.

---

## 9. What are the benefits of replication?

- High availability  
- Data redundancy  
- Disaster recovery  

---

## 10. What are the limitations?

- Increased hardware cost  
- Replication lag  

---

## Summary

Replication ensures high availability and data safety in MongoDB systems.

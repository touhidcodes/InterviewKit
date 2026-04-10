---
title: Operators
description: MongoDB operators interview questions and answers.
---

# MongoDB Operators (Interview Q&A)

## 1. What are MongoDB operators?
Operators are special keywords used to perform queries and updates.

---

## 2. What are comparison operators?

- $eq → equal  
- $ne → not equal  
- $gt → greater than  
- $lt → less than  
- $gte → greater than or equal  
- $lte → less than or equal  

Example:

    db.users.find({ age: { $gt: 25 } })

---

## 3. What are logical operators?

- $and  
- $or  
- $not  
- $nor  

Example:

    db.users.find({
      $or: [{ age: { $lt: 20 } }, { age: { $gt: 50 } }]
    })

---

## 4. What are element operators?

- $exists  
- $type  

---

## 5. What are array operators?

- $in  
- $nin  
- $all  

---

## 6. What are update operators?

- $set  
- $inc  
- $push  
- $pull  
- $unset  

---

## Summary

MongoDB operators provide powerful ways to query and manipulate data efficiently.

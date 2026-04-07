---
title: CRUD Operations
description: MongoDB CRUD interview questions and answers in a single file.
---

# MongoDB CRUD (Interview Q&A)

## 1. What does CRUD stand for?
CRUD stands for Create, Read, Update, and Delete — the four basic operations used to manage data in MongoDB.

---

## 2. How do you insert a document in MongoDB?
Use insertOne() to insert a single document.

    db.users.insertOne({ name: "John", age: 25 })

---

## 3. How do you insert multiple documents?
Use insertMany().

    db.users.insertMany([
      { name: "Alice", age: 22 },
      { name: "Bob", age: 30 }
    ])

---

## 4. How do you read all documents from a collection?
Use find().

    db.users.find()

---

## 5. How do you filter documents in MongoDB?
Pass a query object to find().

    db.users.find({ age: { $gt: 20 } })

---

## 6. How do you get a single document?
Use findOne().

    db.users.findOne({ name: "John" })

---

## 7. What is projection in MongoDB?
Projection is used to return only specific fields.

    db.users.find({}, { name: 1, _id: 0 })

---

## 8. How do you update a single document?
Use updateOne().

    db.users.updateOne(
      { name: "John" },
      { $set: { age: 26 } }
    )

---

## 9. How do you update multiple documents?
Use updateMany().

    db.users.updateMany(
      { age: { $lt: 25 } },
      { $set: { status: "young" } }
    )

---

## 10. How do you replace a document completely?
Use replaceOne().

    db.users.replaceOne(
      { name: "John" },
      { name: "John", age: 28, city: "NY" }
    )

---

## 11. How do you delete a single document?
Use deleteOne().

    db.users.deleteOne({ name: "John" })

---

## 12. How do you delete multiple documents?
Use deleteMany().

    db.users.deleteMany({ age: { $lt: 20 } })

---

## 13. How do you delete all documents in a collection?
Use deleteMany({}).

    db.users.deleteMany({})

---

## 14. What are common MongoDB update operators?

- $set → update fields  
- $inc → increment values  
- $push → add to array  
- $pull → remove from array  
- $unset → remove a field  

Example:

    db.users.updateOne(
      { name: "John" },
      {
        $inc: { age: 1 },
        $push: { hobbies: "reading" }
      }
    )

---

## 15. What are best practices for CRUD operations?

- Always use filters to avoid unintended updates/deletes  
- Use indexes for faster reads  
- Use projections to limit returned data  
- Validate data before inserting  
- Prefer updateOne when only one document needs modification  

---

## 16. Difference between updateOne and replaceOne?

- updateOne modifies specific fields using operators  
- replaceOne replaces the entire document  

---

## 17. What happens if no document matches the query in update/delete?

- No changes occur  
- No error is thrown  

---

## 18. What is upsert in MongoDB?

Upsert = update + insert  
If no document matches, MongoDB inserts a new one.

    db.users.updateOne(
      { name: "John" },
      { $set: { age: 30 } },
      { upsert: true }
    )

---

## Summary

CRUD operations in MongoDB are fundamental for any application. Mastering them is essential for building scalable backend systems.

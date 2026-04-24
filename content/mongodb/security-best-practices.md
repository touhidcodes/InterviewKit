---
title: Security Best Practices
description: Hardening MongoDB for production environments.
---

# MongoDB Security Architecture

Securing MongoDB involves multiple layers: Network, access control, encryption, and auditing.

## 1. Authentication and Authorization

### RBAC (Role-Based Access Control)

MongoDB uses RBAC to govern access.

- **Theory**: Users are granted roles, and roles have privileges (actions on resources).
- Always follow the **Principle of Least Privilege**. Don't use the `root` user for your application; create a user with `readWrite` access to specific databases.

### Internal Authentication

In a replica set or sharded cluster, nodes must authenticate to each other.

- **Keyfiles**: A shared secret file.
- **x.509 Certificates**: The most secure method for production.

## 2. Network Security

- **TLS/SSL**: All traffic between the application and the database, and between database nodes, should be encrypted.
- **IP Binding**: By default, MongoDB should only bind to `localhost`. In production, bind it to a specific private IP and use Firewalls (Security Groups) to restrict access.

## 3. Encryption at Rest

**Theory**: Encryption at rest protects data while it is stored on disk.

- WiredTiger supports encryption via the AES256-GCM cipher.
- **Encryption Key Management**: You can use a local keyfile or a KMIP-compliant key management server (KMS).

## 4. Auditing

Auditing allows you to track system activity. This is essential for compliance (e.g., SOC2, HIPAA).

- You can log security events like successful/failed logins, schema changes, and CRUD operations on sensitive collections.

## 5. Defense in Depth Checklist

1. [ ] Enable Authentication.
2. [ ] Use TLS/SSL for all connections.
3. [ ] Restrict Network Access (Whitelist IPs).
4. [ ] Run MongoDB as a dedicated, non-privileged user.
5. [ ] Encrypt sensitive data fields using **Client-Side Field Level Encryption (CSFLE)**.

**CSFLE Theory**: Fields are encrypted by the application driver BEFORE being sent to MongoDB. Even if a DBA has access to the database, they cannot see the decrypted data without the master key stored in an external KMS (like AWS KMS or HashiCorp Vault).

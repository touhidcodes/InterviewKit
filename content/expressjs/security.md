---
title: Security Best Practices
description: Important security measures to protect your Express application.
---

# Express.js Security Best Practices

Secure your Express app with these standard best practices to protect your data and users.

---

## 1. Use Helmet

**Helmet** is a package that sets several security headers for your application. It helps protect from some well-known web vulnerabilities.

```bash
npm install helmet
```

```javascript
const helmet = require("helmet");
app.use(helmet());
```

---

## 2. Implement Rate Limiting

Prevent brute-force and DDoS attacks by limiting the number of requests from the same IP address.

```bash
npm install express-rate-limit
```

```javascript
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

app.use(limiter);
```

---

## 3. Sanitize User Input

Use **express-validator** to sanitize and validate all user inputs (from `req.body`, `req.query`, and `req.params`).

```bash
npm install express-validator
```

```javascript
const { body, validationResult } = require("express-validator");

app.post(
  "/register",
  [body("email").isEmail(), body("password").isLength({ min: 5 })],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Register the user...
  },
);
```

---

## 4. Don't reveal information about your server

Express sets the `X-Powered-By: Express` header by default. Disable it to prevent information leakage.

```javascript
app.disable("x-powered-by");
```

---

## 5. Use HTTPS

Ensure your application is served over HTTPS to protect the data transferred between clients and the server. You can redirect all HTTP traffic to HTTPS using middleware.

---

## 6. Secure Your Sessions

If your application uses sessions or cookies, make sure to set the `HttpOnly`, `Secure`, and `SameSite` flags.

```javascript
app.use(
  session({
    cookie: {
      secure: true, // Only send over HTTPS
      httpOnly: true, // Cannot be accessed by JavaScript (XSS protection)
      sameSite: "strict", // CSRF protection
    },
  }),
);
```

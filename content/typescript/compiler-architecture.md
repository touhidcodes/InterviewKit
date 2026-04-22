---
title: The Compiler Architecture
description: Understanding how TSC transforms your code into JavaScript.
---

# The TypeScript Compiler (TSC) Architecture

TypeScript is not just a type checker; it is a full **Source-to-Source Compiler** (Transpiler). Understanding its pipeline is essential for project configuration and performance.

## 1. The Pipeline Phases

The TSC compilation process happens in five distinct phases:

### Phase 1: The Scanner

The scanner converts the raw source code (strings) into a stream of **Tokens** (the smallest units of meaning like `function`, `id`, `(`).

### Phase 2: The Parser

The parser takes the tokens and builds an **Abstract Syntax Tree (AST)**. This is a tree representation of the code's grammatical structure.

### Phase 3: The Binder

The binder traverses the AST and creates **Symbols**. A symbol maps a name (like a variable `x`) to its declaration. This creates the **Symbol Table**, which is crucial for managing scopes.

### Phase 4: The Checker

The checker is the "heart" of TypeScript. It uses the AST and the Symbol Table to verify that the types are correct. This is where Type Inference, CFA, and structural checking happen.

### Phase 5: The Emitter

Once the check is complete (or even if there are errors), the emitter transforms the AST into JavaScript code (`.js`) and declarations (`.d.ts`).

## 2. Type Erasure Theory

**The Theory**: TypeScript types exist only during Phase 4 (The Checker).
In Phase 5 (The Emitter), all interfaces, type aliases, and type annotations are stripped away.

**Exceptions**: Enums and Classes are "hybrid" features that _do_ generate JS code.

## 3. The `tsconfig.json` Theory

The `compilerOptions` tell the emitter and checker how to behave.

- **`target`**: Determines the syntax used in the emitted JS.
- **`strict`**: Enables a suite of type-checking rules (the most important being `strictNullChecks`).
- **`module`**: Determines how the emitted JS handles imports/exports (CommonJS, ESM).

## 4. Declarations (.d.ts)

A `.d.ts` file contains only the type definitions (metadata) without the implementation.
**The Theory**: These allow TypeScript to understand libraries written in pure JavaScript. They act as a "Type Header" file.

## 5. Performance: Incremental Compilation

TSC can use a "Build Cache" (stored in `.tsbuildinfo`).
**Theory**: By tracking which files changed and their dependencies, the compiler only re-checks the necessary parts of the tree, significantly speeding up build times.

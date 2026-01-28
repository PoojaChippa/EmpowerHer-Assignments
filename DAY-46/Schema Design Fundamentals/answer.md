# Schema Design Fundamentals – Relational Databases

## 1. What schema design is and what a database schema represents?

Schema design is the process of planning and structuring how data will be stored in a relational database. It defines **what tables exist**, **what columns they contain**, **the relationships between tables**, and **the rules (constraints) applied to the data**.

A **database schema** is the blueprint of the database. It represents the logical structure of the database, including:

- Tables
- Columns and their data types
- Primary keys and foreign keys
- Constraints such as NOT NULL or UNIQUE

Example: A schema for an online store may include tables like `users`, `products`, and `orders`, and define how orders are linked to users and products.

---

## 2. Why schema design is required before writing backend code?

Schema design should be done **before backend development** because backend logic depends directly on how data is stored and accessed.

Reasons:

- Backend APIs perform CRUD operations based on table structure
- Poor schema forces frequent backend code changes
- Clear schema helps developers write efficient queries
- Prevents logic errors caused by unclear relationships

Example: If the `orders` table structure changes after backend code is written, APIs for placing or fetching orders may break.

---

## 3. How poor schema design impacts data consistency, maintenance, and scalability?

Poor schema design causes several long-term issues:

### Data Consistency

- Duplicate or conflicting data
- Update anomalies (same data updated in one place but not another)

### Maintenance

- Hard to understand and modify
- Small changes require updates across many tables and queries

### Scalability

- Inefficient queries slow down as data grows
- Difficult to add new features without redesigning tables

Example: Storing user address in multiple tables can lead to mismatched addresses and complex updates.

---

## 4. What validations are in schema design and why databases enforce validations (for example: NOT NULL, UNIQUE, DEFAULT, PRIMARY KEY)?

Validations (constraints) are rules applied at the database level to ensure data correctness and integrity.

Common validations:

- **NOT NULL** – prevents missing values
- **UNIQUE** – avoids duplicate values (e.g., email)
- **DEFAULT** – assigns a default value if none is provided
- **PRIMARY KEY** – uniquely identifies each row

Databases enforce validations to:

- Protect data integrity
- Reduce reliance on backend-only checks
- Prevent invalid or inconsistent data from being stored

Example: A `users.email` column with UNIQUE ensures no two users share the same email.

---

## 5. The difference between a database schema and a database table.

| Database Schema                   | Database Table               |
| --------------------------------- | ---------------------------- |
| Overall structure of the database | Stores actual data rows      |
| Contains multiple tables          | Represents a single entity   |
| Defines relationships and rules   | Contains columns and records |

In simple terms, **schema is the design**, while **tables are the containers for data**.

---

## 6. Why a table should represent only one entity?

Each table should represent a **single real-world entity** to follow normalization principles.

Benefits:

- Avoids data duplication
- Makes data easier to update
- Improves clarity and query design

Example:

- `users` table → user details
- `orders` table → order details

Mixing user and order data in one table leads to redundancy and confusion.

---

## 7. Why redundant or derived data should be avoided in table design?

Redundant data is data that is repeated unnecessarily, and derived data is data that can be calculated from existing fields.

Problems caused:

- Inconsistent values
- Extra storage usage
- Update anomalies

Example:

- Storing both `date_of_birth` and `age`
- Age can be calculated, but storing it causes incorrect values over time

---

## 8. The importance of choosing correct data types while designing tables?

Choosing correct data types ensures:

- Data accuracy
- Better performance
- Efficient storage

Examples:

- Use `INTEGER` for age, not TEXT
- Use `DATE` for birth dates
- Use `BOOLEAN` for true/false values

Incorrect data types can allow invalid data and slow down queries.

---

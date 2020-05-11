Quick Reference
===============

Common SQL statements for working with data:

```sql
INSERT INTO table (column1, column2, column3) VALUES (val1, val2, val3);

UPDATE table
SET column1 = val1,
    column2 = val2
WHERE column3 = val3;

DELETE FROM table WHERE column = value;

SELECT column1, column2
FROM table
WHERE column3 = val3;
```

Creating a database table:
```sql
CREATE TABLE table_name (
    id INTEGER AUTO_INCREMENT NOT NULL,
    col1 VARCHAR(30),
    col2 INTEGER,
    PRIMARY KEY (id)
);
```

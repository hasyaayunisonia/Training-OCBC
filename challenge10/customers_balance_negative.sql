-- You are working for the finance department and need to generate a report of all customers who currently have a negative balance (i.e., they owe money). The report should also include the total number of transactions they have made, to help assess their activity.

-- The result should have the following columns: iban | amount | transaction_count.
-- The result should be sorted in ascending order by amount (to show the largest debtors first).

-- Note:
-- Only customers whose balance is negative should be included in the report.

-- Table customers
-- | name | type        | description         |
-- | id   | SMALLINT    | ID                  |
-- | iban | VARCHAR(255)| IBAN number         |
-- | name | VARCHAR(255)| Customer's full name|

-- Table balances
-- | name        | type        | description |
-- | customer_id | SMALLINT    | Customer ID |
-- | amount      | DECIMAL(5,2)| Amount      |

-- Table transactions
-- | name               | type        | description          |
-- | id                 | INT         | Transaction ID       |
-- | customer_id        | SMALLINT    | Customer ID          |
-- | transaction_amount | DECIMAL(5,2)| Value of transaction |
-- | transaction_date   | DATE        | Date of transaction  |

-- Answer : 
SELECT 
    c.iban, 
    b.amount, 
    COUNT(t.id) AS transaction_count
FROM customers c
JOIN balances b ON c.id = b.customer_id
LEFT JOIN transactions t ON c.id = t.customer_id
WHERE b.amount < 0  
GROUP BY c.iban, b.amount
ORDER BY b.amount ASC   
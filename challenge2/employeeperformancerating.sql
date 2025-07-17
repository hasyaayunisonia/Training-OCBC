-- A company stores the EmployeeID, FullName, and PerformanceScore for every employee in an EMPLOYEES table. The performance score ranges from 0 to 100.
-- Write a query to print the employee's full name along with their Performance Rating. Each row must be in the following format:

-- [FullName] (ID: [EmployeeID]) has a performance rating of: [PerformanceRating]

-- Sort the output by EmployeeID in ascending order.

-- The Performance Rating (PerformanceRating) is mapped as follows:
-- If PerformanceScore < 50, the rating is Needs Improvement.
-- If 50 <= PerformanceScore < 75, the rating is Meets Expectations.
-- If 75 <= PerformanceScore < 90, the rating is Exceeds Expectations.
-- If PerformanceScore >= 90, the rating is Outstanding.

SELECT 
    CONCAT(FullName, "ID: , ", EmployeeID,") has performance rating of: ", 
        CASE
            WHEN PerformanceScore< 50 THEN 'Needs Improvement'
            WHEN PerformanceScore < 75 THEN 'Meets Expectations'
            WHEN PerformanceScore < 90 THEM 'Exceeds Expectations'
            ELSE 'Outstanding'
        END)
FROM EMPLOYEES
ORDER BY EmployeeID ASC

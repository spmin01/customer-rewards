A simple app to calculate the rewards points of a customer given the following criteria:
A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent over $50 in each transaction
(e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).
With only the last 3 months of transactions considered.

Frontend written in React, backend written in Spring Boot with mySQL database. Frontend code stored at /customerrewards/src/main/resources/customer-rewards

All data generated using faker(https://www.npmjs.com/package/faker). If frontend finds no data, it gives a prompt to generate, sending it to //localhost:8080 and 
triggering a page refresh. Because of the timing in which this was written, transaction dates are generated with bounds of 2021/04/01 and the current date.
All points calculations take place on the backend and are sent back.

Main display is a table of all customers generated, 10 used for testing, with their customerID, full name, and points totals displayed. The details display button replaces
customer table with their transaction table (random number of transactions) and last three months of points broken down by month.

All code generating the last three months of transactions is arbitrary - meaning it will work regardless of current date and dates used in generation. As written all transactions
will be displayed, but only the last 3 months of totals will show up at the bottom.

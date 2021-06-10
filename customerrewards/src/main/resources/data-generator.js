let faker = require('faker');
let fs = require('fs');


// creates a new customer with firstName, lastName as strings and transactions as array
function generateCustomer()
{

    // generate the customers name
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();

    // generate a transaction list for each customer, limited 10 for now
    let transactions = [];
    let numTransactions = Math.random() * 10 + 1;

    for(let i = 0; i < numTransactions; i++) {
        transactions.push(generateTransaction());
    }


    return {
        firstName: firstName,
        lastName: lastName,
        transactions: transactions
    };
}

function generateTransaction()
{
    let transactionAmount = faker.finance.amount();
    let transactionDate = faker.date.recent(90);

    return {
        transactionAmount: transactionAmount,
        transactionDate: transactionDate
    };
}


let customerList = [];

for(let i = 0; i < 10; i++) {
    customerList.push(generateCustomer());
}


fs.appendFile('customers.json', JSON.stringify(customerList), function (err) {
    if (err) throw err;
    console.log("Saved!");
});

import React, { Component } from 'react';
const faker = require('faker');


class GenerateData extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        let customerList = [];

        // generates 10 customers, might set to some level of randomiztaion later
        for (let i = 0; i < 10; i++) {
            customerList.push(generateCustomer());
        }

        fetch("http://localhost:8080/api/customer", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(customerList)
        }).then(function(res) 
        {
            window.location.reload(true); // refresh the page to grab generated data back from the server
        });

    }


    render() {
        return (
            <button onClick={this.handleClick}>
                Generate Some?
            </button>
        )
    }

}

// creates a new customer with firstName, lastName as strings and transactions as array
function generateCustomer() {

    // generate the customers name
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();

    // generate a transaction list for each customer, limited 10 for now
    let transactions = [];
    let numTransactions = Math.random() * 10 + 1;

    for (let i = 0; i < numTransactions; i++) {
        transactions.push(generateTransaction());
    }


    return {
        firstName: firstName,
        lastName: lastName,
        transactions: transactions
    };
}

function generateTransaction() {
    let transactionAmount = faker.finance.amount();
    let transactionDate = faker.date.recent(90);

    return {
        transactionAmount: transactionAmount,
        transactionDate: transactionDate
    };
}

export default GenerateData;
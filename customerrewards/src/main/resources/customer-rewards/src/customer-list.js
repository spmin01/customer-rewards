import React, { Component } from 'react';
import DataGenerator from './data-generator'
import CustomerTransactions from './customer-transactions'



class CustomerList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            customers: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/customer")
            .then(res => res.json())
            .then(
                (result) => {

                    console.log(result); // debug

                    let customerList = [];

                    // convert each json entry into an object and store
                    result.forEach(obj => {

                        // convert primitave date strings into javascript date objects for easier comparison
                        for(let i = 0; i < obj.transactions.length; i++) {
                            let date = new Date(obj.transactions[i].transactionDate);
                            console.log(date.getMonth());
                            obj.transactions[i].transactionDate = date;
                        }

                        customerList.push(obj);
                        console.log(obj.transactions);
                    });


                    this.setState({
                        isLoaded: true,
                        customers: customerList
                    });


                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, customers } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else if (customers.length === 0) {
            return <div>
                <p>Customer data appears to be empty</p>
                <DataGenerator />
            </div>
        }
        else {
            return (
                <ul>
                    {customers.map(customer => (
                        <li key={customer.id}>
                            {customer.firstName} {customer.lastName} Points: {customer.rewardsPoints} <CustomerTransactions transactions={customer.transactions} />
                        </li>
                    ))}
                </ul>
            );
        }
    }


}

export default CustomerList;
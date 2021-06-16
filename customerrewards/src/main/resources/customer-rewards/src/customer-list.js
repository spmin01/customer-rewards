import React, { Component } from 'react';
import DataGenerator from './data-generator'
import CustomerTransactions from './customer-transactions'



class CustomerList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            customers: [],
            isTransactionView: false,
            transactionsToView: null
        }

        this.handleClick = this.handleClick.bind(this);
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
                        for (let i = 0; i < obj.transactions.length; i++) {
                            let date = new Date(obj.transactions[i].transactionDate);
                            obj.transactions[i].transactionDate = date.toJSON();
                        }

                        customerList.push(obj);
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

    handleClick(customerTransactions) {

        if (this.state.isTransactionView) {
            this.setState(prevState => ({
                isTransactionView: !prevState.isTransactionView,
                transactionsToView: null
            }));
        } else {
            this.setState(prevState => ({
                isTransactionView: !prevState.isTransactionView,
                transactionsToView: customerTransactions
            }));
        }



        console.log("event handler");
        console.log(this.state);

    }

    render() {
        const { error, isLoaded, customers, isTransactionView } = this.state;

        if (!isTransactionView) {
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
                    <table>
                        <tr>
                            <th>Customer ID</th>
                            <th>Customer Name</th>
                            <th>Total Rewards Points</th>
                        </tr>
                        {customers.map(customer => (
                            <tr key={customer.id}>
                                <td>{customer.id}</td>
                                <td>{customer.firstName} {customer.lastName}</td>
                                <td>Points: {customer.rewardsPoints}</td>
                                <td><button onClick={this.handleClick.bind(this, customer.transactions)}>View details?</button></td>
                            </tr>
                        ))}
                    </table>
                );
            }

        } else {
            return <CustomerTransactions  transactions = {this.state.transactionsToView} handler = {this.handleClick} />
        }

    }


}

export default CustomerList;
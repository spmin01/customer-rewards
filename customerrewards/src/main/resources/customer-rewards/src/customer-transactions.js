import React, { Component } from 'react'


class CustomerTransactions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.transactions.sort((a, b) => {
            if (a.transactionDate > b.transactionDate) {
                return 1
            } else if (a.transactionDate < b.transactionDate) {
                return -1;
            } else {
                return 0;
            }
        });
    }

    handleClick() {

        this.setState(prevState => ({
            isActive: !prevState.isActive
        }));
        console.log(this.props.transactions);
        console.log("details click event");

        this.getLastThreeMonths();
    }

    // TODO: generate last 3 months of transactions
    getLastThreeMonths() {
        let currentDate = new Date(); // gets current date in json format
        let currentMonth = Number(currentDate.getMonth());
        

    }



    render() {

        const isActive = this.state.isActive;
        let detailsText;
        if (!isActive) {
            detailsText = <button onClick={this.handleClick}>View details?</button>;
        }
        else {
            // TODO: Format this as a table
            // TODO: add form to generate new transaction
            detailsText = (<div>
                <button onClick={this.handleClick}>Hide details?</button>
                <ul>
                    {this.props.transactions.map(transaction =>(
                    <li key={transaction.id}>
                        {transaction.id}  {transaction.transactionAmount} {transaction.transactionDate.toJSON().slice(0, 10)} {transaction.transactionPoints}
                    </li>
                    ))}
                </ul>
            </div>
            );
        }

        return detailsText;
    }



}


export default CustomerTransactions;
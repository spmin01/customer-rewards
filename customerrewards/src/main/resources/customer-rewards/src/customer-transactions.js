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

        // this will do something eventually


    }

    handleClick() {
        this.props.handleClick.bind(this, this.props.transactions);
    }

    // TODO: generate last 3 months of transactions
    getLastThreeMonths() {
        let currentDate = new Date(); // gets current date in json format
        let currentMonth = Number(currentDate.getMonth());


    }



    render() {

        const isActive = this.state.isActive;
        let detailsText;

        // TODO: add form to generate new transaction
        detailsText = (<div>
            <button onClick={this.props.handler}>Hide details?</button>
            <table>
                <tr>
                    <th>Transaction ID</th>
                    <th>Transaction Amount</th>
                    <th>Transaction Date</th>
                    <th>Rewards Points Earned</th>
                </tr>
                {this.props.transactions.map(transaction => (
                    <tr key={transaction.id}>
                        <td>{transaction.id}</td>
                        <td>{transaction.transactionAmount}</td>
                        <td>{transaction.transactionDate.slice(0, 10)}</td>
                        <td>{transaction.transactionPoints}</td>
                    </tr>
                ))}
            </table>
        </div>
        );


        return detailsText;
    }



}


export default CustomerTransactions;
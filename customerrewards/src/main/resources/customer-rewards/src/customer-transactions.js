import React, { Component } from 'react'


class CustomerTransactions extends React.Component {

    // not sure if this is necessary but it work so i'm keeping it
    constructor(props) {
        super(props);

        this.state = {
            currentMonth: new Date().getMonth(),
            lastThreeMonths: []
        }

        this.months = {
            0: "January",
            1: "Feburary",
            2: "March",
            3: "April",
            4: "May",
            5: "June",
            6: "July",
            7: "August",
            8: "September",
            9: "October",
            10: "November",
            11: "December"
        }
    }

    componentDidMount() {
        this.getLastThreeMonths();
    }

    componentWillUnmount() {
        this.setState({
            currentMonth: null,
            lastThreeMonths: []
        });
    }

    // even if points total includes more than 3 months, this will ensure that only 3 months are given in last 3 month calculations
    getLastThreeMonths() {

        let currentDate = new Date();

        this.setState({
            lastThreeMonths: this.props.transactions.filter((transaction) => {
                if (transaction.transactionDate.getMonth() === currentDate.getMonth() ||
                    transaction.transactionDate.getMonth() === currentDate.getMonth() - 1 ||
                    transaction.transactionDate.getMonth() === currentDate.getMonth() - 2) {
                    return transaction;
                }
            })
        });
    }

    getMonth(monthCode) {
        console.log("running getMonth")
        console.log(this.state)
        for(let key in this.months) {
            if(Number(key) === monthCode) {
                return this.months[key];
            }
        }
    }

    sumPointsByMonth(monthCode) {

        let pointsTotal = 0;

        for(let i = 0; i < this.state.lastThreeMonths.length; i++) {
            if(this.state.lastThreeMonths[i].transactionDate.getMonth() === monthCode) {
                pointsTotal += this.state.lastThreeMonths[i].transactionPoints;
            }
        }

        return pointsTotal;

    }

    render() {

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
                        <td>{transaction.transactionDate.toJSON().slice(0, 10)}</td>
                        <td>{transaction.transactionPoints}</td>
                    </tr>
                ))}
            </table>

            <h4>Last 3 months totals</h4>
            <p>{this.getMonth(this.state.currentMonth - 2)} Total: {this.sumPointsByMonth(this.state.currentMonth - 2)}</p>
            <p>{this.getMonth(this.state.currentMonth - 1)} Total: {this.sumPointsByMonth(this.state.currentMonth - 1)}</p>
            <p>{this.getMonth(this.state.currentMonth)} Total: {this.sumPointsByMonth(this.state.currentMonth)} </p>
        


        </div>
        );

        return detailsText;
    }
}


export default CustomerTransactions;
import React, { Component } from 'react';


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
                    this.setState({
                        isLoaded: true,
                        items: result.customers
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
        } else if(!isLoaded) {
            return <div>Loading...</div>
        } else {
            return(
                <ul>
                    {customers.map(customer => (
                        <li key={customer.id}>
                            {customer.firstName} {customer.lastName}
                        </li>
                    ))}
                </ul>
            );
        }
    }


}

export default CustomerList;
package org.spmin.customerrewards.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;

@Entity
public class Transaction extends AbstractEntity {

    private double transactionAmount;
    private String transactionDate; // TODO: investigate making this into a more complex data type
    private int transactionPoints;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonBackReference
    private Customer customer;

    public Transaction() {}

    // constructor used for tests only
    public Transaction(double transactionAmount) {
        this.transactionAmount = transactionAmount;
    }

    public double getTransactionAmount() {
        return transactionAmount;
    }

    public void setTransactionAmount(double transactionAmount) {
        this.transactionAmount = transactionAmount;
    }

    public String getTransactionDate() {
        return transactionDate;
    }

    public int getTransactionPoints() {
        return transactionPoints;
    }

    public void setTransactionPoints(int transactionPoints) {
        this.transactionPoints = transactionPoints;
    }

    public void setTransactionDate(String transactionDate) {
        this.transactionDate = transactionDate;


    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
}

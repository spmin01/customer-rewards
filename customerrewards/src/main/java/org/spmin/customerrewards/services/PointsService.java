package org.spmin.customerrewards.services;

import org.spmin.customerrewards.models.Customer;
import org.spmin.customerrewards.models.Transaction;

import java.util.List;

public class PointsService {


    // calculate points for an individual transaction and save to that transaction
    // Every dollar spent over $100 is worth 2 points
    // and every dollar spent over $50 is worth 1 point
    static public int calculateTransactionPoints(double transactionAmt) {

        int transactionPoints = 0;

       if (transactionAmt > 100) {
           transactionPoints += 50 + 2 * (Math.floor(transactionAmt) - 100);
        } else if (transactionAmt > 50) {
           transactionPoints += Math.floor(transactionAmt) - 50;
        }
       //else do nothing

       return transactionPoints;
    }

    // calculates a customer's rewards points and sums them
    static public void calculateCustomerPoints(Customer customer) {

        int pointsTotal = 0;
        List<Transaction> transactionList = customer.getTransactions();

        for(Transaction transaction : transactionList) {
            int transactionPoints = PointsService.calculateTransactionPoints(transaction.getTransactionAmount());
            transaction.setTransactionPoints(transactionPoints);
            pointsTotal += transactionPoints;
        }
        customer.setRewardsPoints(pointsTotal);

    }
}

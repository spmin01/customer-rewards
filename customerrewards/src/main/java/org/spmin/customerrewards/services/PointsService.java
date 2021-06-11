package org.spmin.customerrewards.services;

import org.spmin.customerrewards.models.Customer;
import org.spmin.customerrewards.models.Transaction;

import java.util.List;

public class PointsService {

    // calculates a customer's rewards points
    // Every dollar spent over $100 is worth 2 points
    // and every dollar spent over $50 is worth 1 point
    static public int calculatePoints(Customer customer) {

        int pointsTotal = 0;
        List<Transaction> transactionList = customer.getTransactions();

        for (Transaction transaction : transactionList) {
            double transactionAmt = Math.floor(transaction.getTransactionAmount());

            if (transactionAmt > 100) {
                pointsTotal += 50 + 2 * (transactionAmt - 100);
            } else if (transactionAmt > 50) {
                pointsTotal += transactionAmt - 50;
            }
            // else do nothing
        }

        return pointsTotal;
    }
}

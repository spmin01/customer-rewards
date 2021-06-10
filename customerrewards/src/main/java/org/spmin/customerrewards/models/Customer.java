package org.spmin.customerrewards.models;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public class Customer extends AbstractEntity {

    private String firstName;
    private String lastName;

    private int rewardsPoints;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Transaction> customerTransactions;

    public Customer() {
        this.rewardsPoints = 0;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getRewardsPoints() {
        return rewardsPoints;
    }

    public void setRewardsPoints(int rewardsPoints) {
        this.rewardsPoints = rewardsPoints;
    }

    public List<Transaction> getCustomerTransactions() {
        return customerTransactions;
    }

    public void setCustomerTransactions(List<Transaction> customerTransactions) {
        this.customerTransactions = customerTransactions;
    }
}

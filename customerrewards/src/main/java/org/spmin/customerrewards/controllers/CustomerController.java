package org.spmin.customerrewards.controllers;

import org.spmin.customerrewards.models.Customer;
import org.spmin.customerrewards.models.data.CustomerRepository;
import org.spmin.customerrewards.models.data.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge=3600)
@RestController
@RequestMapping("/api/customer")
public class CustomerController {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    TransactionRepository transactionRepository;


    @GetMapping
    public ResponseEntity<?> getCustomers() {

        //TODO: this doesn't need to return everything, just firstName, lastName, id
        return new ResponseEntity<>(customerRepository.findAll(), HttpStatus.OK);
    }

    // Takes randomly generated customer data as input to populate database
    @PostMapping()
    public ResponseEntity<?> postCustomers(@RequestBody List<Customer> customers) {


        // TODO: Verification here

        // TODO: put this into a service class
        for(int i = 0; i < customers.size(); i++) {
            customerRepository.save(customers.get(i));
        }

        return new ResponseEntity<>(HttpStatus.CREATED);
    }


}

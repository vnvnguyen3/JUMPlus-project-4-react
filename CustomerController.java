package com.dollarsbank.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Customer;
import com.repository.CustomerRepository;

@RestController
public class CustomerController {

	@Autowired 
	CustomerRepository repo;
	
	//CREATE
		@PostMapping("/add/customer")
		public Customer createCustomer(@RequestBody Customer customer) {
			repo.save(customer);
			return customer;
		}
	
	//Get
	@GetMapping("/Customer")
	public List<Customer> getAllCustomers(){
		return repo.findAll();
	}
	
	//Get by id
	@GetMapping("/Customer/{id}")
	public Customer getCustomerById(@PathVariable long id) {
		Optional<Customer> customer=repo.findById(id);
		
		if(customer.isPresent()) {
			return customer.get();
		}
		return new Customer();
	}
	
	
	//update by id
	@PutMapping("/update/customer/{id}")
	public String updateCustomer(@RequestBody Customer customer) {
		Optional<Customer> foundCustomer = repo.findById(customer.getCustomerId());
		
		if(foundCustomer.isPresent()) {
			repo.save(customer);
			return customer.toString()+" was Saved to database";
		}else {
			return "Customer with id "+ customer.getCustomerId() + " could not be updated";
		}
	}
	
	//delete by id
	@DeleteMapping("/delete/customer/{id}")
	public ResponseEntity<String> deleteCustomer(@PathVariable long id){
		Optional<Customer> foundCustomer = repo.findById(id);
		
		if(foundCustomer.isPresent()) {
			repo.deleteById(id);
			return ResponseEntity.status(200).body("Deleted customer with id "+ id);
		}else {
			return ResponseEntity.status(404).body("customer with id "+ id+" could not be deleted");
		}
	}
	
}

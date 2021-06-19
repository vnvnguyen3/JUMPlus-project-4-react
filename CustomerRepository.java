package com.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.entity.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer,Long>{

	List<Customer> findAll();
	
	Optional<Customer> findById(Long id);
}

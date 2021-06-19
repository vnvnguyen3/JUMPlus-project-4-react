package com.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long customerId;
	
	@Column(length = 45, nullable = false)
	private String customerPassword;
	
	@Column(length = 45, nullable = false)
	private String customerName;
	
	@Column(length = 45, nullable = false)
	private String customerAddress;
	
	
	@Column(length = 45, nullable = false, unique = true)
	private String contactNumber;


	public Customer() {
		
	}
	
	public Customer(long customerId, String customerPassword, String customerName, String customerAddress,
			String contactNumber) {
		super();
		this.customerId = customerId;
		this.customerPassword = customerPassword;
		this.customerName = customerName;
		this.customerAddress = customerAddress;
		this.contactNumber = contactNumber;
	}

	public long getCustomerId() {
		return customerId;
	}

	public void setCustomerId(long customerId) {
		this.customerId = customerId;
	}

	public String getCustomerPassword() {
		return customerPassword;
	}

	public void setCustomerPassword(String customerPassword) {
		this.customerPassword = customerPassword;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getCustomerAddress() {
		return customerAddress;
	}

	public void setCustomerAddress(String customerAddress) {
		this.customerAddress = customerAddress;
	}

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}

	@Override
	public String toString() {
		return "CustomerModel [customerId=" + customerId + ", customerPassword=" + customerPassword + ", customerName="
				+ customerName + ", customerAddress=" + customerAddress + ", contactNumber=" + contactNumber + "]";
	}

	
	
	
	
}

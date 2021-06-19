package com.model;

import java.util.ArrayList;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(length = 45, nullable = false)
	private String firstName;
	
	@Column(length = 45, nullable = false)
	private String lastName;
	
	@Column(length = 45, nullable = false)
	private String address;
	
	@Column(length = 45, nullable = false, unique = true)
	private String userId;

	@Column(length = 10, nullable = false)
	private String password;
	
	@Column
	private double amount;
	
	@Column
	private ArrayList<String> transactions;
	
	public User() {}
	
	public User(Integer id) {
		super();
		this.id = id;
	}

	public User(long id, String firstName, String lastName, String address, String userId, String password,
			double amount, ArrayList<String> transactions) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.address = address;
		this.userId = userId;
		this.password = password;
		this.amount = amount;
		this.transactions = transactions;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public ArrayList<String> getTransactions() {
		return transactions;
	}

	public void setTransactions(ArrayList<String> transactions) {
		this.transactions = transactions;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", address=" + address
				+ ", userId=" + userId + ", password=" + password + ", amount=" + amount + ", transactions="
				+ transactions + "]";
	}
}

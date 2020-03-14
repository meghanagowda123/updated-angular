package com.cts.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="TRANSACTIONS")
public class Transaction {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "TXNID")
	private int txnId;
	
	@OneToOne
	@JoinColumn(name = "CSID")
	private Customer customer;
	
	@OneToOne
	@JoinColumn(name = "SID")
	private Seller seller;
	
	@Column(name="TTYPE", nullable = false)
	private String transactionType;
	
	@Column(name="AMT", nullable = false)
	private double amount;
	
	@Column(name="TXNDT", nullable = false)
	private LocalDate txnDate;
	
	@Column(name="DSCP")
	private String DSCP;

	public Transaction() {
	}

	public Transaction(int txnId, Customer customer, Seller seller, String transactionType, double amount,
			LocalDate txnDate, String dSCP) {

		this.txnId = txnId;
		this.customer = customer;
		this.seller = seller;
		this.transactionType = transactionType;
		this.amount = amount;
		this.txnDate = txnDate;
		DSCP = dSCP;
	}

	public int getTxnId() {
		return txnId;
	}

	public void setTxnId(int txnId) {
		this.txnId = txnId;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Seller getSeller() {
		return seller;
	}

	public void setSeller(Seller seller) {
		this.seller = seller;
	}

	public String getTransactionType() {
		return transactionType;
	}

	public void setTransactionType(String transactionType) {
		this.transactionType = transactionType;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public LocalDate getTxnDate() {
		return txnDate;
	}

	public void setTxnDate(LocalDate txnDate) {
		this.txnDate = txnDate;
	}

	public String getDSCP() {
		return DSCP;
	}

	public void setDSCP(String dSCP) {
		DSCP = dSCP;
	}

}

package com.cts.entity;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "PURCHASE_HISTORY")
public class PurchaseHistory {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "PRID")
	private Integer purchaseId;

	@OneToOne
	@JoinColumn(name = "CSID")
	private Customer customer;

	@OneToOne
	@JoinColumn(name = "SID")
	private Seller seller;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "TXNID")
	private Transaction transaction;

	@OneToMany
	private List<Product> product;
	
	@OneToOne
	@JoinColumn(name = "DSID")
	private Discount discount;

	@Column(name = "QTY", nullable = false)
	private int quantity;

	@Column(name = "PDT", nullable = false)
	private LocalDate purchaseDate;

	public PurchaseHistory() {

	}

	public PurchaseHistory(int purchaseId, Customer customer, Seller seller, Transaction transaction, List<Product> product,
			int quantity, LocalDate purchaseDate) {
		super();
		this.purchaseId = purchaseId;
		this.customer = customer;
		this.seller = seller;
		this.transaction = transaction;
		this.product = product;
		this.quantity = quantity;
		this.purchaseDate = purchaseDate;
	}

	public int getPurchaseId() {
		return purchaseId;
	}

	public void setPurchaseId(Integer purchaseId) {
		this.purchaseId = purchaseId;
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

	public Transaction getTransaction() {
		return transaction;
	}

	public void setTransaction(Transaction transaction) {
		this.transaction = transaction;
	}

	public List<Product> getProduct() {
		return product;
	}

	public void setProduct(List<Product> product) {
		this.product = product;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public LocalDate getPurchaseDate() {
		return purchaseDate;
	}

	public void setPurchaseDate(LocalDate purchaseDate) {
		this.purchaseDate = purchaseDate;
	}

}

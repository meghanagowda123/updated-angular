package com.cts.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cts.entity.Product;
import com.cts.entity.PurchaseHistory;
import com.cts.service.CheckoutService;

@RestController
@CrossOrigin
@RequestMapping("/checkout")
public class CheckoutController {

	@Autowired
	CheckoutService service;
	
//	@RequestMapping(method = RequestMethod.POST, value="/")
//	PurchaseHistory checkout(@RequestBody Product product) {
//	 return service.checkout(product); 
//	}
}

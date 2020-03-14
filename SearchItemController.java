package com.cts.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.entity.Product;
import com.cts.service.SearchItemService;

@RestController
@CrossOrigin
@RequestMapping("/search")
public class SearchItemController {

	@Autowired
	SearchItemService service;
	
	@RequestMapping("/products")
	List<Product> getAllProducts(){
		return service.getAllProducts();
	}
	
	@RequestMapping("/products/{id}")
	Optional<Product> searchById(@PathVariable Integer id){
		return service.searchById(id);
	}
	
	@RequestMapping("/product/products/{productName}")
	Product searchByName(@PathVariable String productName){
		return service.searchByName(productName);
	}

	@RequestMapping("/{categoryName}")
	List<Product> searchByCategory(@PathVariable String categoryName){
		return (List<Product>) service.searchByCategory(categoryName);
	}
	
	@RequestMapping("/category/{subCategoryName}")
	List<Product> searchBySubCategory(@PathVariable String subCategoryName){
		return (List<Product>) service.searchBySubCategory(subCategoryName);
	}
	
}

package com.cts.repo;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cts.entity.Product;


@Repository
public interface SearchItemRepository extends CrudRepository<Product, Integer> {

	Product findByProductName(String productName);

	@Query(value = "SELECT * FROM Products p WHERE p.CTID IN(SELECT CTID FROM Categories c WHERE c.CTNM=:categoryName)", nativeQuery = true)
	List<Product> findAllByCategory(String categoryName);

	@Query(value = "SELECT * FROM Products p WHERE p.SBID IN(SELECT SBID FROM Sub_Categories c WHERE c.SBNM=:subCategoryName)", nativeQuery = true)
	List<Product> findAllBySubCategory(String subCategoryName);

}

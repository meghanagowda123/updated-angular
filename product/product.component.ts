import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../entities/product.entity';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products: Product[];

	constructor(
		private productService: ProductService
	) { }

	ngOnInit() {
		this.products = this.productService.findAll();
	}


}

// export class SubCategoryComponent implements OnInit {

// 	public products: Product[];
// 	constructor(private productService: ProductService) { }
  
// 	ngOnInit(): void {
// 	  this.products = this.productService.findAll();
// 	}
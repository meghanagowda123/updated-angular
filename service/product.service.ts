import { Injectable } from '@angular/core';
import { Product } from '../entities/product.entity';


@Injectable({
    providedIn: 'root'
  })
  export class ProductService {
    public products: Product[];
    constructor() {
      this.products = [
        { id: '01', name: 'One-Piece Dress', price:3000, photo: '../../assets/dress1.jpg' },
            { id: '02', name: 'Frock', price: 2000, photo: '../../assets/dress2.jpg' },
            { id: '03', name: 'Stylish shirt', price: 1400, photo: '../../assets/shirt2.jpg' },
            { id: '04', name: 'Saree', price: 2000, photo: '../../assets/saree1.jpg' },
            { id: '05', name: 'Checked Shirt', price: 1500, photo: '../../assets/shirt1.jpg' },
            { id: '06', name: 'Trending Shirt', price: 2000, photo: '../../assets/shirt3.jpg' },
            { id: '07', name: 'Samsung A70', price:28990 , photo: '../../assets/m4.jpg' },
            { id: '08', name: 'Vivo V17', price: 22000, photo: '../../assets/e6.jpg' },
            { id: '09', name: 'Oppo F11 Pro', price: 16990, photo: '../../assets/e7.jpg' },
            { id: '10', name: 'ACER', price: 79000, photo: '../../assets/w9.jpg' },
            { id: '11', name: 'LENOVO', price:39990 , photo: '../../assets/e10.jpg' },
            { id: '12', name: 'LG', price: 42990, photo: '../../assets/e14.jpg' },
            { id: '13', name: 'Sneekers', price:1500 , photo: '../../assets/acc12.jpg' },
            { id: '14', name: 'Bracelet', price:1200 , photo: '../../assets/acc2.jpg' },
            { id: '15', name: 'Earring', price: 500, photo: '../../assets/acc3.jpg' },
            { id: '16', name: 'Leather Shoe', price:1800 , photo: '../../assets/acc4.jpg' },
            { id: '17', name: 'Men Watches', price:1500 , photo: '../../assets/acc5.jpg' },
            { id: '18', name: 'Scarf', price:300 , photo: '../../assets/acc6.png' },
            { id: '19', name: 'Cheese', price:200 , photo: '../../assets/gros11.jpg' },
            { id: '20', name: 'Coffee', price:100 , photo: '../../assets/gros5.jpg' },
            { id: '21', name: 'Knorr Sauce', price:50 , photo: '../../assets/gros14.jpg' },
            { id: '22', name: 'Milano', price:200 , photo: '../../assets/gros12.jpg' },
            { id: '23', name: 'Melody', price: 100, photo: '../../assets/gros13.jpg' },
            { id: '24', name: 'Tea bags', price:150 , photo: '../../assets/gros6.jpg' }

    ];
  }
  findAll(): Product[] {
    return this.products;
  }
  
  find(id: string): Product {
    return this.products[this.getSelectedIndex(id)];
  }
  
  public getSelectedIndex(id: string) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].id == id) {
            return i;
        }
    }
    return -1;
  }
  
  }
  
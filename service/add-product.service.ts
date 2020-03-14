import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddProduct } from '../model/add-product';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  baseUrl:string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3100/categories/2';
   }
   
   getAll() : Observable<AddProduct[]>{
     return this.httpClient.get<AddProduct[]>(this.baseUrl)
   }

   getAllById(productId:number) : Observable<AddProduct>{
      return this.httpClient.get<AddProduct>(`${this.baseUrl}/${productId}`);
   }

   add(products:AddProduct) :Observable<AddProduct>{
     return this.httpClient.post<AddProduct>(this.baseUrl,products);
   }

   update(product:AddProduct) : Observable<AddProduct>{
    return this.httpClient.put<AddProduct>(this.baseUrl,product);
 }

}

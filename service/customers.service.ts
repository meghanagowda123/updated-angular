import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customers } from '../model/customers';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  baseUrl:string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/allusers';
   }
   
   getAll() : Observable<Customers[]>{
     return this.httpClient.get<Customers[]>(this.baseUrl)
   }

   getAllById(customerId:number) : Observable<Customers>{
      return this.httpClient.get<Customers>(`${this.baseUrl}/${customerId}`);
   }

   add(customers:Customers) :Observable<Customers>{
     return this.httpClient.post<Customers>(this.baseUrl,customers);
   }

   update(customer:Customers) : Observable<Customers>{
    return this.httpClient.put<Customers>(this.baseUrl,customer);
 }

   save(customer:Customers) :Observable<Customers>{
    return this.httpClient.post<Customers>(this.baseUrl,customer);
  }

  delete(customerId:number) :Observable<Customers>{
    return this.httpClient.delete<Customers>(`${this.baseUrl + "/Customers"}/${customerId}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Checkout } from '../model/checkout';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  baseUrl:string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3100/check';
   }

   getAll() : Observable<Checkout[]>{
     return this.httpClient.get<Checkout[]>(this.baseUrl)
   }

   getAllById(checkoutId:number) : Observable<Checkout>{
      return this.httpClient.get<Checkout>(`${this.baseUrl}/${checkoutId}`);
   }

   add(check:Checkout) :Observable<Checkout>{
     return this.httpClient.post<Checkout>(this.baseUrl,check);
   }

   save(check:Checkout) :Observable<Checkout>{
    return this.httpClient.post<Checkout>(this.baseUrl,check);
  }

  update(check:Checkout) : Observable<Checkout>{
    return this.httpClient.put<Checkout>(this.baseUrl,check);
 }

 delete(checkoutId:number) :Observable<Checkout>{
  return this.httpClient.delete<Checkout>(`${this.baseUrl + "/Checkout"}/${checkoutId}`);
}
}

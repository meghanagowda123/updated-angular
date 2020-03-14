import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseUrl:string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/contact';
   }

   getAll() : Observable<Contact[]>{
     return this.httpClient.get<Contact[]>(this.baseUrl)
   }

   getAllById(contactId:number) : Observable<Contact>{
      return this.httpClient.get<Contact>(`${this.baseUrl}/${contactId}`);
   }

   add(contact:Contact) :Observable<Contact>{
     return this.httpClient.post<Contact>(this.baseUrl,contact);
   }

   update(contact:Contact) : Observable<Contact>{
    return this.httpClient.put<Contact>(this.baseUrl,contact);
 }
}

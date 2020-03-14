import { Injectable } from '@angular/core';
import { Login } from '../model/login';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl:string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/user';
   }
   
   getAll() : Observable<Login[]>{
     return this.httpClient.get<Login[]>(this.baseUrl)
   }

   getAllById(loginId:number) : Observable<Login>{
      return this.httpClient.get<Login>(`${this.baseUrl}/${loginId}`);
   }

   add(login:Login) :Observable<Login>{
     return this.httpClient.post<Login>(this.baseUrl,login);
   }
   update(login:Login) : Observable<Login>{
    return this.httpClient.put<Login>(this.baseUrl,login);
 }
  }
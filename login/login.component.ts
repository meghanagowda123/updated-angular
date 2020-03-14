import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Login } from '../model/login';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customers } from '../model/customers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:Login;
  msg:string;
  isNew:boolean;
  constructor(
    private loginService:LoginService,
    private actRoute:ActivatedRoute,
    private router:Router
    
    ) { }

  ngOnInit() {
    let id=this.actRoute.snapshot.params.id;
    if(id){
      this.isNew=false;
      this.loginService.getAllById(id).subscribe(
        (data) =>{
          this.login=data;
        }
      );

    }
    else{
      this.isNew=true;
      this.login={
    
      userName:'',
      password:''
      };
    }
  }
  onSubmit(){
    let ob:Observable<Login>;
    if(this.isNew){
      ob=this.loginService.add(this.login);
    }else{
      ob=this.loginService.update(this.login);
    }
    ob.subscribe(
      (Data) =>{
        this.router.navigateByUrl("/home");
      },
      (errResponse)=> {
        this.msg=errResponse.error;
        
      }
    );
  }


}

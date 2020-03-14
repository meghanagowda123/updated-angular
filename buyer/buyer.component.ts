import { Component, OnInit } from '@angular/core';
import { Customers } from '../model/customers';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from '../service/customers.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {

  customer:Customers;
  msg:string;
  isNew:boolean;
  constructor(
    private customerService:CustomersService,
    private actRoute:ActivatedRoute,
    private router:Router
    
    ) { }

  ngOnInit() {
    let id=this.actRoute.snapshot.params.id;
    if(id){
      this.isNew=false;
      this.customerService.getAllById(id).subscribe(
        (data) =>{
          this.customer=data;
        }
      );

    }
    else{
      this.isNew=true;
      this.customer={
      firstName:'',
      lastName:'',
      userName:'',
      password:'',
      emailId:'',
      mobileNumber:''
      };
    }
  }
  onSubmit(){
    let ob:Observable<Customers>;
    if(this.isNew){
      ob=this.customerService.add(this.customer);
    }else{
      ob=this.customerService.update(this.customer);
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

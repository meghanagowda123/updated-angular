import { Component, OnInit } from '@angular/core';
import { Checkout } from '../model/checkout';
import { CheckoutService } from '../service/checkout.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  check:Checkout;
  msg:string;
  isNew:boolean;
  constructor(
    private checkService:CheckoutService,
    private actRoute:ActivatedRoute,
    private router:Router
    
    ) { }

  ngOnInit() {
    let id=this.actRoute.snapshot.params.id;
    if(id){
      this.isNew=false;
      this.checkService.getAllById(id).subscribe(
        (data) =>{
          this.check=data;
        }
      );

    }
    else{
      this.isNew=true;
      this.check={
      fullName:'',
      emailId:'',
      address:'',
      city:'',
      state:'',
      zip:0,
      nameOnCard:'',
      cardNumber:'',
      expMonth:'',
      expYear:'',
      cvv:0
      
      };
    }
  }
  onSubmit(){
    let ob:Observable<Checkout>;
    if(this.isNew){
      ob=this.checkService.add(this.check);
    }else{
      ob=this.checkService.update(this.check);
    }
    ob.subscribe(
      (Data) =>{
        this.router.navigateByUrl("/tq");
      },
      (errResponse)=> {
        this.msg=errResponse.error;
        
      }
    );
  }

}

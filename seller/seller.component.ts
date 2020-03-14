import { Component, OnInit } from '@angular/core';
import { Seller } from '../model/seller';
import { SellerService } from '../service/seller.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  seller:Seller;
  msg:string;
  isNew:boolean;
  constructor(
    private sellerService:SellerService,
    private actRoute:ActivatedRoute,
    private router:Router
    
    ) { }

  ngOnInit() {
    let id=this.actRoute.snapshot.params.id;
    if(id){
      this.isNew=false;
      this.sellerService.getAllById(id).subscribe(
        (data) =>{
          this.seller=data;
        }
      );

    }
    else{
      this.isNew=true;
      this.seller={
      firstName:'',
      lastName:'',
      userName:'',
      password:'',
      companyDetails:'',
      emailId:'',
      mobileNumber:''
      };
    }
  }
  onSubmit(){
    let ob:Observable<Seller>;
    if(this.isNew){
      ob=this.sellerService.add(this.seller);
    }else{
      ob=this.sellerService.update(this.seller);
    }
    ob.subscribe(
      (Data) =>{
        this.router.navigateByUrl("/addinventory");
      },
      (errResponse)=> {
        this.msg=errResponse.error;
        
      }
    );
  }

}

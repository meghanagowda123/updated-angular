import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../entities/product.entity';
import { AddProduct } from '../model/add-product';
import { AddProductService } from '../service/add-product.service';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {

  product:AddProduct;
  msg:string;
  isNew:boolean;
  constructor(
    private productService:AddProductService,
    private actRoute:ActivatedRoute,
    private router:Router
    
    ) { }

  ngOnInit() {

    let id=this.actRoute.snapshot.params.id;
    if(id){
      this.isNew=false;
      this.productService.getAllById(id).subscribe(
        (data) =>{
          this.product=data;
        }
      );

    }
    else{
      this.isNew=true;
      this.product={

        productName:'',
        description:'',
        price:0,
        gst:0,
        quantity:0,
        image:''
      };
    }
  }

  onSubmit(){
    let ob:Observable<AddProduct>;
    if(this.isNew){
      ob=this.productService.add(this.product);
    }else{
      ob=this.productService.update(this.product);
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

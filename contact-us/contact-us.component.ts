import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact';
import { ContactService } from '../service/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contact:Contact;
  msg:string;
  isNew:boolean;
  constructor(
    private contactService:ContactService,
    private actRoute:ActivatedRoute,
    private router:Router
    
    ) { }

  ngOnInit() {
    let id=this.actRoute.snapshot.params.id;
    if(id){
      this.isNew=false;
      this.contactService.getAllById(id).subscribe(
        (data) =>{
          this.contact=data;
        }
      );

    }
    else{
      this.isNew=true;
      this.contact={
      name:'',
      query:'',
      phone:'',
      emailId:''
      };
    }
  }
  onSubmit(){
    let ob:Observable<Contact>;
    if(this.isNew){
      ob=this.contactService.add(this.contact);
    }else{
      ob=this.contactService.update(this.contact);
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
// import {NgForm} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClothingComponent } from './clothing/clothing.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { BuyerComponent } from './buyer/buyer.component';
import { SellerComponent } from './seller/seller.component';
import { GroceryComponent } from './grocery/grocery.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './service/product.service';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddInventoryComponent} from './add-inventory/add-inventory.component';
  import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClothingComponent,
    HeaderComponent,
    CartComponent,
    BuyerComponent,
    SellerComponent,
    GroceryComponent,
    AccessoriesComponent,
    FooterComponent,
    LoginComponent,
    ElectronicsComponent,
    CheckoutComponent,
    ProductComponent,
    AddInventoryComponent,
    ContactUsComponent,
    ThankYouComponent,
    CarouselComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
    // NgForm
    // ReactiveFormsModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

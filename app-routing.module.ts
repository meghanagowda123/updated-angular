import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {ActivatedRoute,Router} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClothingComponent } from './clothing/clothing.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
// import { CartComponent } from './cart/cart.component';
import { BuyerComponent } from './buyer/buyer.component';
import { SellerComponent } from './seller/seller.component';
import { GroceryComponent } from './grocery/grocery.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { LoginComponent } from './login/login.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {ProductComponent} from './product/product.component';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'clothing',component:ClothingComponent},
  {path:'cart',component:CartComponent},
  //{path:'ct',component:CartComponent},
  {path:'buyer',component:BuyerComponent},
  {path:'seller',component:SellerComponent},
  {path:'gro',component:GroceryComponent},
  {path:'acc',component:AccessoriesComponent},
  {path:'login',component:LoginComponent},
  {path:'ele',component:ElectronicsComponent},
  {path:'check',component:CheckoutComponent},
  {path:'product',component:ProductComponent},
  {path:'pro/ct',component:CartComponent},
  {path:'clothing/cart',component:CartComponent},
  {path:'ele/cart',component:CartComponent},
  {path:'acc/cart',component:CartComponent},
  {path:'gro/cart',component:CartComponent},
  {path:'clothing/pro',component:CartComponent},
  {path:'clothing/pro/check',component:CheckoutComponent},
  {path:'addinventory',component:AddInventoryComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'pnf',component:PagenotfoundComponent},
  {path:'tq',component:ThankYouComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

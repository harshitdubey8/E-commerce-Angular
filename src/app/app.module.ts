import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MensComponent } from './mens/mens.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { WomensComponent } from './womens/womens.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { KidsComponent } from './kids/kids.component';
import { ReturnProductComponent } from './return-product/return-product.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, MensComponent, HomescreenComponent, WomensComponent, LoginComponent, RegisterComponent, CartComponent, OrdersComponent, KidsComponent, ReturnProductComponent, FeedbackComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}

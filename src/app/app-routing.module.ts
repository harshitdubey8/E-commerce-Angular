import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { MensComponent } from './mens/mens.component';
import { WomensComponent } from './womens/womens.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { KidsComponent } from './kids/kids.component';
import { ReturnProductComponent } from './return-product/return-product.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: 'home', component: HomescreenComponent },
  { path: 'mens', component: MensComponent },
  { path: 'womans', component: WomensComponent },
  { path: 'kids', component: KidsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', component: CartComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'return', component: ReturnProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

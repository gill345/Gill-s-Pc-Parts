import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { SellProductComponent } from './components/sell-product/sell-product.component';
import { MyListingsComponent } from './components/account/my-listings/my-listings.component';
import { MyOrdersComponent } from './components/account/my-orders/my-orders.component';

export const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'sell', component: SellProductComponent },
  { path: 'listings', component: MyListingsComponent },
  { path: 'orders', component: MyOrdersComponent },
  { path: '**', redirectTo: '' }
];

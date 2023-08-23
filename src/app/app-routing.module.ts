import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/orders/products/products.component';
import { OrderMasterComponent } from './components/orders/order-master/order-master.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ProductDetalisComponent } from './components/orders/product-detalis/product-detalis.component';
import { AuthGuard } from './Gaurds/auth.guard';

const routes: Routes = [// first-match wins strategy
  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },//default path
      { path: 'home', component: HomeComponent },
      { path: 'product', component: ProductsComponent },
      { path: 'product/:pid', component: ProductDetalisComponent },
      { path: 'order', component: OrderMasterComponent, canActivate: [AuthGuard]},
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LoginComponent },
  { path: '**', component: NotFoundComponent }//wild card path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

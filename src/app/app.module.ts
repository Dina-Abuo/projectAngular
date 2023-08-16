import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/orders/products/products.component';
import { FormsModule } from '@angular/forms';
import { LightBoxDirective } from './Directives/light-box.directive';
import { USDtoEGPPipe } from './Pipes/usdto-egp.pipe';
import { NationalIDToDatePipe } from './Pipes/national-idto-date.pipe';
import { CreditCardPipe } from './Pipes/credit-card.pipe';
import { ShadowDirective } from './Directives/shadow.directive';
import { OrderMasterComponent } from './components/orders/order-master/order-master.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    ProductsComponent,
    LightBoxDirective,
    USDtoEGPPipe,
    NationalIDToDatePipe,
    CreditCardPipe,
    ShadowDirective,
    OrderMasterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

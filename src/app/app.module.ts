import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerHomeComponent } from './modules/customer/components/customer-home/customer-home.component';
import { BankHomeComponent } from './modules/bank/components/bank-home/bank-home.component';
import { FieldHomeComponent } from './modules/field-staff/components/field-home/field-home.component';
import { LoginComponent } from './modules/account/components/login/login.component';
import { FieldLayoutComponent } from './modules/field-staff/components/field-layout/field-layout.component';
import { BankLayoutComponent } from './modules/bank/components/bank-layout/bank-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerHomeComponent,
    BankHomeComponent,
    FieldHomeComponent,
    LoginComponent,
    FieldLayoutComponent,
    BankLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

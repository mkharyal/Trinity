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
import { HBSharedModule } from './shared/hb-shared.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedService } from './shared/services/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    //  CustomerHomeComponent,
    //  BankHomeComponent,
    //  FieldHomeComponent,
    LoginComponent,
    //  FieldLayoutComponent,
    //  BankLayoutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HBSharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

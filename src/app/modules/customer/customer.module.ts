import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerRoutingModule, CUSTOMER_COMPONENTS } from './customer-routing.module';
import { HBSharedModule } from '../../shared/hb-shared.module';

import { MatTableModule } from '@angular/material';
import { CustomerService } from './services/customer.service';

@NgModule({
	declarations: [
		...CUSTOMER_COMPONENTS,	],
	imports: [
		CustomerRoutingModule,
		HttpClientModule,
		MatTableModule,
		FormsModule,
		ReactiveFormsModule,
		HBSharedModule,
	],

	entryComponents: [
	],
	exports: [
	],
	providers: [
	 CustomerService
	],
})
export class CustomerModule { }

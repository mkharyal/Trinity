import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BankRoutingModule, BANK_COMPONENTS } from './bank-routing.module';
import { HBSharedModule } from '../../shared/hb-shared.module';

import { MatTableModule } from '@angular/material';

@NgModule({
	declarations: [
		...BANK_COMPONENTS,	],
	imports: [
		BankRoutingModule,
		HttpClientModule,
		MatTableModule,
		FormsModule,
		ReactiveFormsModule,
		HBSharedModule,
	],

	entryComponents: [
	],
	exports: [
	]
	//providers: [
	//  JobsService
	//],
})
export class BankModule { }

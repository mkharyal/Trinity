import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldRoutingModule, FIELD_COMPONENTS } from './field-routing.module';

import { MatTableModule } from '@angular/material';
import { HBSharedModule } from 'src/app/shared/hb-shared.module';

@NgModule({
	declarations: [
		...FIELD_COMPONENTS,	],
	imports: [
		FieldRoutingModule,
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
export class FieldModule { }

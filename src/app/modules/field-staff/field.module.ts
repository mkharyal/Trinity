import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldRoutingModule, FIELD_COMPONENTS } from './field-routing.module';

import { MatTableModule } from '@angular/material';
import { HBSharedModule } from 'src/app/shared/hb-shared.module';
import { FieldService } from './services/field.service';
import { FieldDetailsComponent } from './components/field-details/field-details.component';

@NgModule({
	declarations: [
		...FIELD_COMPONENTS,
		FieldDetailsComponent,	],
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
	],
	providers: [
	 FieldService
	],
})
export class FieldModule { }

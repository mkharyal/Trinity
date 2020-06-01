import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HBSharedMaterialModule } from './hb-shared-material.module';
import { HB_SHARED_COMPONENTS } from './components';

import { HB_SHARED_SERVICES } from './services';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		...HB_SHARED_COMPONENTS,
	

	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HBSharedMaterialModule,
	
    FlexLayoutModule,
    RouterModule
	],
	entryComponents: [
		
	],
  providers: [...HB_SHARED_SERVICES],
	exports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		FlexLayoutModule,
		HBSharedMaterialModule,		
		...HB_SHARED_COMPONENTS,
	]
})
export class HBSharedModule { }

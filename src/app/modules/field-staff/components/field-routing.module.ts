import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { FieldLayoutComponent } from './field-layout/field-layout.component';
import { FieldHomeComponent } from './field-home/field-home.component';


export const FIELD_COMPONENTS = [
	FieldLayoutComponent,
	FieldHomeComponent
];

const FIELD_ROUTES: Routes = [
	{
		path: '', component: FieldLayoutComponent,
		children: [
			{ path: 'home', component: FieldHomeComponent }
		]
	}
];

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		RouterModule.forChild(FIELD_ROUTES)
	],
	exports: [RouterModule]
})
export class FieldRoutingModule { }

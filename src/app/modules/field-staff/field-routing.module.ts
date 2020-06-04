import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { FieldLayoutComponent } from './components/field-layout/field-layout.component';
import { FieldHomeComponent } from './components/field-home/field-home.component';
import { FieldDetailsComponent } from './components/field-details/field-details.component';


export const FIELD_COMPONENTS = [
	FieldLayoutComponent,
	FieldHomeComponent
];

const FIELD_ROUTES: Routes = [
	{
		path: '', component: FieldLayoutComponent,
		children: [
			{ path: '', component: FieldHomeComponent },
			{ path: 'details/:requestId', component: FieldDetailsComponent }
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

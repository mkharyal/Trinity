import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';

import { CustomerHomeComponent } from './components/customer-home/customer-home.component';
import { CustomerLayoutComponent } from './components/customer-layout/customer-layout.component';

export const CUSTOMER_COMPONENTS = [
	CustomerLayoutComponent,
	CustomerHomeComponent
];

const CUSTOMER_ROUTES: Routes = [
	{
		path: '', component: CustomerLayoutComponent,
		children: [
			{ path: '', component: CustomerHomeComponent }
		]
	}
];

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		RouterModule.forChild(CUSTOMER_ROUTES)
	],
	exports: [RouterModule]
})
export class CustomerRoutingModule { }

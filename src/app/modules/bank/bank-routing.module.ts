import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { BankHomeComponent } from './components/bank-home/bank-home.component';
import { BankLayoutComponent } from './components/bank-layout/bank-layout.component';
import { CustomerHomeComponent } from '../customer/components/customer-home/customer-home.component';

export const BANK_COMPONENTS = [
	BankLayoutComponent,
	CustomerHomeComponent
];

const JOBS_ROUTES: Routes = [
	{
		path: '', component: BankLayoutComponent,
		children: [
			{ path: 'home', component: BankHomeComponent }
		]
	}
];

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		RouterModule.forChild(JOBS_ROUTES)
	],
	exports: [RouterModule]
})
export class CustomerRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { BankHomeComponent } from './components/bank-home/bank-home.component';
import { BankLayoutComponent } from './components/bank-layout/bank-layout.component';


export const BANK_COMPONENTS = [
	BankLayoutComponent,
	BankHomeComponent
];

const JOBS_ROUTES: Routes = [
	{
		path: '', component: BankLayoutComponent,
		children: [
			{ path: '', component: BankHomeComponent }
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
export class BankRoutingModule { }

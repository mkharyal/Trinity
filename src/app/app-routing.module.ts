import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/account/components/login/login.component';


const APP_ROUTES: Routes = [
	{ path: '', redirectTo: 'cust', pathMatch: 'full' },
	{
		path: 'cust',	
		loadChildren: () => import('./modules/customer/customer.module').then(m => m.CustomerModule)
	},
	{
		path: 'field',	
		loadChildren: () => import('./modules/field-staff/field.module').then(m => m.FieldModule)
	},
	{
		path: 'bank',	
		loadChildren: () => import('./modules/bank/bank.module').then(m => m.BankModule)
	},
	{ path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

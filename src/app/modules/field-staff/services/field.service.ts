import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SharedService } from 'src/app/shared/services/shared.service';
import { ServiceRequestModel } from 'src/app/shared/models/service-request.model';

@Injectable({
	providedIn: 'root'
})
export class FieldService {
	ActiveUser: boolean = true;
	isUserCreatedSuccess: boolean = false;
	requestModel:ServiceRequestModel[]=[{amount:'100',addressType:'Location',transactionType:'Deposit',otp:'1111',status:''}]
	constructor(private httpClient: HttpClient, private router: Router, private sharedService: SharedService) { }

	// submitRequest(data: ServiceRequestModel) {
	// 	//	this.sharedService.addCustomerRequest(data);
	// 	var fourdigitsrandom = Math.floor(1000 + Math.random() * 9000);
	// 	data.otp=fourdigitsrandom.toString();
	// 	this.sharedService.requestModel.push(data);
	// }

	getRequests(): Observable<ServiceRequestModel[]> {
		//	this.sharedService.getCustomerRequests().subscribe(res=>{
		return of(this.requestModel);
	}
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { ServiceRequestModel } from '../models/service-request.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  requestModel: ServiceRequestModel[]=[];
  constructor(private http: HttpClient) {
   
  } 
}

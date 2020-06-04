import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { ServiceRequestModel } from 'src/app/shared/models/service-request.model';
import { MatTableDataSource } from '@angular/material';




@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.scss']
})
export class CustomerHomeComponent implements OnInit {
  customerForm: FormGroup;
  displayedColumns: string[] = [ 'amount', 'transactionType', 'addressType','otp'];
  dataSource=new MatTableDataSource<ServiceRequestModel>();  
  constructor(private _formBuilder: FormBuilder, private customerService: CustomerService) { 
  }

  ngOnInit() {
    this.customerForm = this._formBuilder.group({
      amount: ['', Validators.required],
      transactionType: ['', Validators.required],
      addressType: ['', Validators.required],
      
    });
    this.loadSubmittedRequests();  
  }

  loadSubmittedRequests() {
    this.customerService.getRequests().subscribe((res:ServiceRequestModel[]) => {
      if(res){
        this.dataSource= new MatTableDataSource(res);
       
      }
    });
  }

  onSubmit(): void {
    this.customerForm.markAllAsTouched();
    if (this.customerForm.invalid) {
      return;
    }
    this.customerService.submitRequest(this.customerForm.value);
    this.customerForm.reset();
    this.loadSubmittedRequests();

  }
}


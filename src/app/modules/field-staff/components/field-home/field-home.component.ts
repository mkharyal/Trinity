import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceRequestModel } from 'src/app/shared/models/service-request.model';
import { MatTableDataSource } from '@angular/material';
import { FieldService } from '../../services/field.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-field-home',
  templateUrl: './field-home.component.html',
  styleUrls: ['./field-home.component.scss']
})
export class FieldHomeComponent implements OnInit {
  fieldForm: FormGroup;
  displayedColumns: string[] = ['amount', 'transactionType', 'addressType', 'otp','action'];
  dataSource = new MatTableDataSource<ServiceRequestModel>();
  constructor(private router: Router,private _formBuilder: FormBuilder, private fieldService: FieldService) { }

  ngOnInit() {
    this.fieldForm = this._formBuilder.group({
      amount: ['', Validators.required],
      addressType: ['', Validators.required],
      address: ['', Validators.required],
    });
    this.loadSubmittedRequests();
  }

  onSubmit(): void {
    this.fieldForm.markAllAsTouched();
    if (this.fieldForm.invalid) {
      return;
    }
  }

  loadSubmittedRequests() {
    this.fieldService.getRequests().subscribe((res: ServiceRequestModel[]) => {
      if (res) {
        this.dataSource = new MatTableDataSource(res);

      }
    });
  }
  onViewClick(event) {
    let url = `field/details/${event.otp}`;
		this.router.navigate([url]);
  }
}

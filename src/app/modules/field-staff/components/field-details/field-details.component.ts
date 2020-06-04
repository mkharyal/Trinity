import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-field-details',
  templateUrl: './field-details.component.html',
  styleUrls: ['./field-details.component.scss']
})
export class FieldDetailsComponent implements OnInit {
  customerForm: FormGroup;
  requestId='';
  constructor(private router: Router,
		private route: ActivatedRoute,private _formBuilder: FormBuilder) {
    this.route.params.subscribe(params => {
			this.requestId = params['requestId'];
		});
	//	this.getJobDetail(this.jobId);
   }

  ngOnInit() {
    this.customerForm = this._formBuilder.group({
      amount: ['1000'],
      transactionType: ['Deposit'],
      addressType: ['Location'],
      address: ['Mayank Kharyal,\n#256, Model Town,\nChandigarh \nPhone: 9988998899'],
      phone: ['9988998899'],
      otp:['', Validators.required],
    });
    this.customerForm.controls['amount'].disable();
    this.customerForm.controls['transactionType'].disable();
    this.customerForm.controls['addressType'].disable();
    this.customerForm.controls['address'].disable();
    this.customerForm.controls['phone'].disable();
  }
}



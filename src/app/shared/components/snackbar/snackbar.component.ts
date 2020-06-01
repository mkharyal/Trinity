import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
//import { SnackBarModel } from '../../models/snackbar.model';

@Component({
  selector: 'ip-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  
  // openSnackBar(snackBarModel:SnackBarModel) {
  //   this.snackBar.open(snackBarModel.message, '', {
  //     duration: snackBarModel.duration,
  //     verticalPosition: 'top',
  //     horizontalPosition:'end',
  //     panelClass: ['fis-style', 'ruf-inkbar-top',snackBarModel.messageType ]
  //   });
  // }
}

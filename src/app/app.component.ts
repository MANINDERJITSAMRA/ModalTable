import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ModalCompaniesComponent } from './modal-companies/modal-companies.component.ts';
import { ModalCarsComponent } from  './modal-cars/modal-cars.component.ts';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {

  constructor(public dialog: MatDialog) {}

   openCompaniesModal(): void {
    const dialogRef = this.dialog.open(ModalCompaniesComponent, {
      width: '900px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

  openCarsModal(): void {
    const dialogRef = this.dialog.open(ModalCarsComponent, {
      width: '900px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

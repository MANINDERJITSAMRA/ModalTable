import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { ModalHelperService } from '../modal-helper.service';

const ELEMENT_DATA = [
  { model: '911', brand: 'Porsche', horsepower: 540, torque: 486, price: 184200 },
  { model: 'R8', brand: 'Audi', horsepower: 420, torque: 430, price: 254600 },
  { model: 'I8', brand: 'BMW', horsepower: 374, torque: 570, price: 150600 },
  { model: 'Continental', brand: 'Bently', horsepower: 626, torque: 467, price: 237500  },
  { model: 'G500', brand: 'Mercedes', horsepower: 422, torque: 610, price: 176905  },
];

@Component({
  selector: 'app-modal-cars',
  templateUrl: './modal-cars.component.html',
  styleUrls: ['./modal-cars.component.css']
})
export class ModalCarsComponent {
  
  displayedColumns: string[] = ['select', 'Model', 'Brand', 'Horsepower', 'Torque', 'Price'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selection = new SelectionModel(true, []);

  constructor(
    public dialogRef: MatDialogRef<ModalCarsComponent>,
    public modalHelperService: ModalHelperService
  ) {}

  save = () => this.modalHelperService.save();
  filter = () => this.modalHelperService.filter();
  sort = () => this.modalHelperService.sort();
  masterToggle = (selection, dataSource) => this.modalHelperService.masterToggle(selection, dataSource);
  isAllSelected = (selection, dataSource) => this.modalHelperService.isAllSelected(selection, dataSource);
}

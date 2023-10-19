import { Component } from '@angular/core';
export interface PeriodicElement {
  name: string;
  phNo: number;
  email:string}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string[] = ['name', 'phNo', 'email'];
  dataSource = [];
  // userData:any=[];

  constructor(){
    let data: any = localStorage.getItem('userDetails')
    this.dataSource = JSON.parse(data);
    console.log(this.dataSource);
  }
}
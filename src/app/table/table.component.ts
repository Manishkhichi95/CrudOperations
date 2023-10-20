import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
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

  constructor(private userService:UserServiceService){
    this.dataSource = this.userService.getUser();
    console.log(this.dataSource);
  }
}
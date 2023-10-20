import { Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { UserServiceService } from '../userService/user-service.service';

export interface PeriodicElement {
  name: string;
  phNo: number;
  email: string
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'phNo', 'email', 'action'];
  userData: any = [];
  dataSource: any;

  constructor(private userService: UserServiceService) {
    this.userData = this.userService.getUser();
    this.userData = this.userData.slice();
    this.dataSource = new MatTableDataSource<Element>(this.userData);
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = this.userData;
  }


  deleteUser(user: any) {
    if (confirm('Do you want to delete the user data?')) {
      let deleteIndex: number = this.dataSource.data.indexOf(user);
      this.dataSource.data.splice(deleteIndex, 1);
      this.userService.setUser(this.dataSource.data);
      this.dataSource.data = this.userService.getUser();
    }
  }

  updateUser(user: any) {
    this.userService.setIndex(user);
    this.userService.goToAddUser();
  }

  sortedData: any = [];

  sortData(sort: Sort) {
    const data = this.dataSource.data.slice();
    if (!sort.active || sort.direction === '') {
      this.dataSource.data = data;
      return;
    }

    this.dataSource.data = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'phNo':
          return compare(a.phNo, b.phNo, isAsc);
        case 'email':
          return compare(a.email, b.email, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
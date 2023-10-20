import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

  data: any = [];
  index: any;
  constructor(private route: Router) { }

  setUser(data: any) {
    localStorage.setItem('userDetails', JSON.stringify(data));
  }

  getUser() {
    this.data = localStorage.getItem('userDetails');
    this.data = JSON.parse(this.data);
    return this.data;
  }

  setIndex(user: any) {
    this.index = this.data.indexOf(user);
  }

  getIndex() {
    return this.index;
  }

  goToUserList() {
    this.route.navigateByUrl('');
  }
  goToAddUser() {
    this.route.navigateByUrl('userform');
  }
}
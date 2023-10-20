import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserServiceService } from '../userService/user-service.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {
  userData: any = [];
  index: any;
  edit: boolean = false;

  userDetails = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phNo: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{10}$")]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")])
  });

  constructor(private userService: UserServiceService, private route: Router) {
    this.userService.getUser() != null ? this.userData = this.userService.getUser() : this.userData = [];
    this.index = this.userService.getIndex();
  }

  ngOnInit(): void {
    this.index >= 0 ? (this.edit = true, this.userDetails.setValue({
      name: this.userData[this.index].name,
      phNo: this.userData[this.index].phNo,
      email: this.userData[this.index].email
    })) : this.edit = false;

  }
  submitDetails(formDetails: any) {
    this.userDetails.invalid ? alert('Please Enter Valid Details') :
      (this.index >= 0 ? (this.userData[this.index] = formDetails, this.edit = false, this.userService.setIndex(''), this.userDetails.reset()) :
        this.userData.push(formDetails),
        this.userService.setUser(this.userData),
        this.userDetails.reset(),
        this.route.navigateByUrl(''));
  }
}
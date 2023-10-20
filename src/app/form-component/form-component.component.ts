import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent {
  userData: any = [];
  userDetails = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phNo: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{10}$")]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")])
  });

  constructor(private userService: UserServiceService) {
    this.userService.getUser() != null ? this.userData = this.userService.getUser() : this.userData = [];
  }

  submitDetails(formDetails: any) {
    this.userDetails.invalid ? alert('Please Enter Valid Details') :
      (this.userData.push(formDetails),
        this.userService.setUser(this.userData))
  }
}
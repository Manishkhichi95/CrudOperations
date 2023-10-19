import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


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

  constructor() {
    let data: any = localStorage.getItem('userDetails');
    this.userData = JSON.parse(data);
   }

  submitDetails(formDetails: any) {
    this.userDetails.invalid? alert('Please Enter Valid Details') :
      (this.userData.push(formDetails),
        localStorage.setItem('userDetails', JSON.stringify(this.userData))
      )
  }
}
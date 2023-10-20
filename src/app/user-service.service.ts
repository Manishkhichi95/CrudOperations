import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  data:any=[];
  constructor() { }

  setUser(data:any){
    localStorage.setItem('userData',JSON.stringify(data));
  }
  
  getUser(){
    this.data = localStorage.getItem('userData');
    let parsedData:any = JSON.parse(this.data);
    return parsedData;
  }
}
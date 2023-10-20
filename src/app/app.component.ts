import { Component } from '@angular/core';
import { UserServiceService } from './userService/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudApplication';

  constructor(private userService: UserServiceService) { }

  goToUserList() {
    this.userService.goToUserList();
  }

  goToAddUser() {
    this.userService.goToAddUser();
  }
}
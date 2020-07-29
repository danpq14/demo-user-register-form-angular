import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {IUser} from '../iuser';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: IUser[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUser();
    console.log(this.userList);
  }
  getAllUser() {
    this.userList = this.userService.getAll();
  }
}

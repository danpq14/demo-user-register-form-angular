import { Injectable } from '@angular/core';
import {IUser} from './iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList: IUser[] = [];
  constructor() { }
  getAll(){
    return this.userList;
  }
  create(user: IUser) {
    this.userList.push(user);
  }
}

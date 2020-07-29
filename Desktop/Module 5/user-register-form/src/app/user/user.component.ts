import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {IUser} from '../iuser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  currentId: number = 0;
  userForm: FormGroup = new FormGroup({
    id : new FormControl(this.currentId),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.minLength(6), Validators.required]),
    country: new FormControl("", ),
    age: new FormControl(0, [Validators.min(16), Validators.max(50)]),
    gender: new FormControl("Other"),
    phone: new FormControl("", [Validators.required, Validators.pattern('(09|01[2|6|8|9])+([0-9]{8})\\b')]),
  });
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  get email(){
    return this.userForm.get('email')
  }
  get password(){
    return this.userForm.get('password')
  }
  get age(){
    return this.userForm.get('age')
  }
  get phone(){
    return this.userForm.get('phone')
  }
  register() {
      let user: IUser = {
        id: this.userForm.value.id,
        email: this.userForm.value.email,
        password: this.userForm.value.password,
        country: this.userForm.value.country,
        age: this.userForm.value.age,
        gender: this.userForm.value.gender,
        phone: this.userForm.value.phone
      };
      this.userService.create(user)
  }
}

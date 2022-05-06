import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserNextGen } from '../models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm = new UserNextGen("", 0, "");

  @Output() onUserCreated = new EventEmitter<UserNextGen>();

  constructor() { }

  ngOnInit(): void {
  }

  createUser() {
    console.log("Form submitted", this.userForm)

    this.onUserCreated.emit(this.userForm);
  }


}

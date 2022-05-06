import { Component } from '@angular/core';
import { buildUser, UserNextGen } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // newContent = 'ciao';

  // counter = 50;

  users: UserNextGen[] = [
    new UserNextGen("Philip", 16, "it"),
    new UserNextGen("Mark", 20, "en"),
    new UserNextGen("Albert", 90, "it"),
    new UserNextGen("Frank", 25, "fr"),
  ];

  updateUserList(user: UserNextGen) {
    this.users.push(user);
  }

  // increase() {
  //   this.counter++;
  // }

  // decrease() {
  //   this.counter--;
  // }


}


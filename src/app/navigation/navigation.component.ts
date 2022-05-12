import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this._auth.login();
  }

  logout() {
    this._auth.logout();
  }

  get isLoggedIn() {
    return this._auth.isLoggedIn;
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Subscriber, Subscription, tap } from 'rxjs';
import { AuthRxService } from '../services/auth-rx.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  isLoggedIn$ = this._auth.isLoggedIn$;

  constructor(private _auth: AuthRxService) { }

  ngOnInit(): void {
  }

  login() {
    this._auth.login();
  }

  logout() {
    this._auth.logout();
  }
}

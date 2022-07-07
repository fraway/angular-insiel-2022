import { Component, OnDestroy, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, Subscriber, Subscription, tap } from 'rxjs';
import { AppState } from '../reducers';
import { setUsername } from '../reducers/username.reducer';
import { AuthNgrxService } from '../services/auth-ngrx.service';
import { AuthRxService } from '../services/auth-rx.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  isLoggedIn$ = this._auth.isLoggedIn$;

  usernameControl = new FormControl();

  constructor(
    private _auth: AuthNgrxService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('username').subscribe(u => this.usernameControl.patchValue(u))

    this.usernameControl.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged()
    )
      .subscribe((value) => this.store.dispatch(setUsername({ username: value })))
  }

  logout() {
    this._auth.logout();
  }
}

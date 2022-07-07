import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../reducers';
import { login, logout } from '../reducers/is-loggedin.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthNgrxService {

  constructor(private store: Store<AppState>) { }

  get isLoggedIn$(): Observable<boolean> {
    return this.store.select('isLoggedIn');
  }

  login() {
    this.store.dispatch(login());
  }

  logout() {
    this.store.dispatch(logout());
  }
}

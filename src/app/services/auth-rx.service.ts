import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthRxService {
  private _isLoggedIn = new BehaviorSubject(false);

  constructor() { }

  get isLoggedIn$(): Observable<boolean> {
    return this._isLoggedIn.asObservable().pipe(
      tap((val) => {
        console.log('value received', val)
      }),
      // filter((val) => val === true),
      // map((val) => !val)
    );
  }

  login() {
    this._isLoggedIn.next(true);
  }

  logout() {
    this._isLoggedIn.next(false);
  }
}

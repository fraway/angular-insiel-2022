import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { first, Observable, tap } from 'rxjs';
import { AuthNgrxService } from '../services/auth-ngrx.service';

@Injectable({
  providedIn: 'root'
})
export class DenyGuestsGuard implements CanActivate {

  constructor(
    private _auth: AuthNgrxService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this._auth.isLoggedIn$.pipe(
      first(),
      tap((value) => console.log('guard check, value is', value)),
      tap((isGranted) => {
        if (isGranted) {
          return;
        }

        localStorage.setItem('redirect_to', state.url);
        this.router.navigate(['/login']);
      })
    );
  }

}

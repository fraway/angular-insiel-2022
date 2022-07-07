import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";
import { IsLoggedInActions } from "./reducers/is-loggedin.reducer";

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private router: Router
    ) { }


    onLogoutRedirect$ = createEffect(() => this.actions$.pipe(
        ofType(IsLoggedInActions.Logout),
        tap(() => this.router.navigate(['/']))
    ), {
        dispatch: false
    })

    onLoginRedirect$ = createEffect(() => this.actions$.pipe(
        ofType(IsLoggedInActions.Login),
        tap(() => {
            this.router.navigate([localStorage.getItem('redirect_to') ?? '/'])
            localStorage.removeItem('redirect_to')
        })
    ), {
        dispatch: false
    })
}
import { createAction, createReducer, on } from "@ngrx/store";

export enum IsLoggedInActions {
    Login = '[Login Page] Login',
    Logout = '[Home Page] Logout',
}

export const login = createAction(IsLoggedInActions.Login)
export const logout = createAction(IsLoggedInActions.Logout)

export const isLoggedInReducer = createReducer(
    false,
    on(login, (_) => true),
    on(logout, (_) => false),
);
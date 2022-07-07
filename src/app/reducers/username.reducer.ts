import { createAction, createReducer, on, props } from "@ngrx/store";

export const setUsername = createAction('[Home Page] Set Username', props<{ username: string }>())

export const usernameReducer = createReducer(
    'Guest',
    on(setUsername, (_, { username }) => username),
)
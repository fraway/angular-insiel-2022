import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, delay, first, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { AppState, DepositOperation } from './reducers';
import { LogEventAction } from './reducers/analytics.reducer';
import { BalanceActionType, DepositAction } from './reducers/balance.reducer';
import { DepositOperationActionType, DepositOperationErrorAction, DepositOperationIdleAction, DepositOperationSuccessAction, StartDepositOperationAction } from './reducers/deposit-operation.reducer';
import { EventsLoadedAction } from './reducers/events.reducer';
import { Event, EventsService } from './services/events.service';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private _event: EventsService
  ) { }

  onDepositOperationStart$ = createEffect(
    () => this.actions$.pipe(
      ofType(DepositOperationActionType.Start),
      delay(1000),
      map((action: StartDepositOperationAction) => action.amount),
      tap((amount: number) => {
        if (amount <= 0) {
          throw new Error('amount is invalid');
        }
      }),
      map((amount: number) => new DepositAction(amount)),
      catchError((err) => of(new DepositOperationErrorAction(err.message)))
    )
  )

  onDepositSuccess$ = createEffect(
    () => this.actions$.pipe(
      ofType(BalanceActionType.Deposit),
      map(() => new DepositOperationSuccessAction())
    )
  )

  onDepositSuccessLog$ = createEffect(
    () => this.actions$.pipe(
      ofType(BalanceActionType.Deposit),
      mergeMap(() => this.store.select('depositOperation').pipe(
        first(),
        map((op: DepositOperation) => new LogEventAction('Deposit Success', {
          amount: op.amount
        }))
      ))
    )
  )

  resetDepositOperation$ = createEffect(
    () => this.actions$.pipe(
      ofType(DepositOperationActionType.Success, DepositOperationActionType.Error),
      delay(2000),
      map(() => ({ type: DepositOperationActionType.Idle }))
    )
  )

  loadEvents$ = createEffect(
    () => this.actions$.pipe(
      ofType('[Events Page] Load'),
      switchMap(() => this._event.fetch().pipe(
        map((events: Event[]) => new EventsLoadedAction(events)),
        // TODO: error
      ))
    )
  )
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { catchError, delay, map, of, tap } from 'rxjs';
import { BalanceActionType, DepositAction } from './reducers/balance.reducer';
import { DepositOperationActionType, DepositOperationErrorAction, DepositOperationIdleAction, DepositOperationSuccessAction, StartDepositOperationAction } from './reducers/deposit-operation.reducer';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) { }

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

  resetDepositOperation$ = createEffect(
    () => this.actions$.pipe(
      ofType(DepositOperationActionType.Success, DepositOperationActionType.Error),
      delay(2000),
      map(() => ({ type: DepositOperationActionType.Idle }))
    )
  )
}

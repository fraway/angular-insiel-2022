import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, DepositOperation } from '../reducers';
import { DepositAction, WithdrawAction } from '../reducers/balance.reducer';
import { DepositOperationIdleAction, DepositOperationSuccessAction, StartDepositOperationAction } from '../reducers/deposit-operation.reducer';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  constructor(private store: Store<AppState>) { }

  get balance$() {
    return this.store.select('balance');
  }

  deposit(value: number) {

    this.store.dispatch(new StartDepositOperationAction(value));

    setTimeout(() => {
      this.store.dispatch(new DepositAction(value))
      this.store.dispatch(new DepositOperationSuccessAction());

      setTimeout(() => {
        this.store.dispatch(new DepositOperationIdleAction());
      }, 2000);

    }, 1000);

  }

  withdraw(value: number) {
    this.store.dispatch(new WithdrawAction(value))
  }
}

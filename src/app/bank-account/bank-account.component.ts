import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { BankAccountService } from '../services/bank-account.service';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent implements OnInit {
  depositForm = this.fb.group({ value: [0, [Validators.required, Validators.min(1)]] })
  withdrawForm = this.fb.group({ value: [0, [Validators.required, Validators.min(1)]] })

  balance$ = this._bankAccount.balance$;
  operation$ = this.store.select('depositOperation')

  constructor(
    private fb: FormBuilder,
    private _bankAccount: BankAccountService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  deposit() {
    const value = this.depositForm.get('value')?.value;
    this._bankAccount.deposit(value)
  }

  withdraw() {
    const value = this.withdrawForm.get('value')?.value;
    this._bankAccount.withdraw(value)
  }
}

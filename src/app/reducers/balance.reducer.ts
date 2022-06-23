import { Action } from "@ngrx/store";

export function balanceReducer(value = 0, action: Action): number {
    switch (action.type) {
        case BalanceActionType.Deposit:
            const depositAction = action as DepositAction;
            const newValue = value + depositAction.amount;

            return newValue;

        case BalanceActionType.Withdraw:
            const withDrawAction = action as WithdrawAction;
            const newVal = value - withDrawAction.amount;

            return newVal;

        default:
            return value;
    }
}

export class DepositAction implements Action {
    type = BalanceActionType.Deposit;

    constructor(public amount: number) { }
}

export class WithdrawAction implements Action {
    type = BalanceActionType.Withdraw;

    constructor(public amount: number) { }
}

export enum BalanceActionType {
    Deposit = '[Home Page] Deposit',
    Withdraw = '[Home Page] Withdraw'
}

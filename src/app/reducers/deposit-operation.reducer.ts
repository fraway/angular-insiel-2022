import { Action } from "@ngrx/store";
import { DepositOperation, depositOperationStates } from ".";
import { BalanceActionType } from "./balance.reducer";

const initialState: DepositOperation = {
    amount: 0,
    state: 'idle'
}

export function depositOperationReducer(state = initialState, action: Action): DepositOperation {

    switch (action.type) {

        case DepositOperationActionType.Start:
            const startDepositOperationAction = action as StartDepositOperationAction;

            const newState: DepositOperation = {
                ...state,
                amount: startDepositOperationAction.amount,
                state: 'loading',
                error: undefined
            };

            return newState;

        case BalanceActionType.Deposit:
            return {
                ...state,
                state: 'success',
                error: undefined
            };

        // case DepositOperationActionType.Success:
        //     return {
        //         ...state,
        //         state: 'success',
        //         error: undefined
        //     };

        case DepositOperationActionType.Error:
            const errorAction = action as DepositOperationErrorAction;
            return {
                ...state,
                state: 'error',
                error: errorAction.cause
            };

        case DepositOperationActionType.Idle:
            return {
                ...initialState
            }

        default:
            return state;
    }

}

export class StartDepositOperationAction implements Action {
    type = DepositOperationActionType.Start;

    constructor(public amount: number) { }
}

export class DepositOperationSuccessAction implements Action {
    type = DepositOperationActionType.Success;
}

export class DepositOperationIdleAction implements Action {
    type = DepositOperationActionType.Idle;
}

export class DepositOperationErrorAction implements Action {
    type = DepositOperationActionType.Error;

    constructor(public cause: string) { }
}

enum DepositOperationActionType {
    Start = '[Home Page] Start Deposit',
    Success = '[Home Page] Deposit Success',
    Error = '[Home Page] Deposit Error',
    Idle = '[Home Page] Deposit Idle',
}
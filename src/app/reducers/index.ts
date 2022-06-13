import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { balanceReducer } from './balance.reducer';
import { depositOperationReducer } from './deposit-operation.reducer';

// 1: simple approach
// 2: advanced approach with operation status

export type depositOperationStates = 'loading' | 'error' | 'success' | 'idle';

export interface DepositOperation {
  amount: number;
  state: depositOperationStates;
  error?: string;
}

export interface AppState {
  balance: number;
  depositOperation: DepositOperation;
}

export const reducers: ActionReducerMap<AppState> = {
  balance: balanceReducer,
  depositOperation: depositOperationReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

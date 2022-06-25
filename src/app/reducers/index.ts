import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Event } from '../services/events.service';
import { balanceReducer } from './balance.reducer';
import { depositOperationReducer } from './deposit-operation.reducer';
import { eventsReducer } from './events.reducer';

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
  events: Event[];
}

export const reducers: ActionReducerMap<AppState> = {
  balance: balanceReducer,
  depositOperation: depositOperationReducer,
  events: eventsReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

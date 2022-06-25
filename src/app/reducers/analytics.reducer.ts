import { Action } from "@ngrx/store";

export class LogEventAction implements Action {
  readonly type = AnalyticsActionType.LogEvent;

  constructor(public event: string, public payload: any, public user?: string) { }
}

export enum AnalyticsActionType {
  LogEvent = '[Analytics Effect] Log Event'
}

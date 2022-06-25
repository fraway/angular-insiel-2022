import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, mergeMap } from 'rxjs';
import { AnalyticsActionType, LogEventAction } from './reducers/analytics.reducer';

@Injectable()
export class AnalyticsEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private client: HttpClient
  ) { }

  routerEvents$ = createEffect(() => this.router.events.pipe(
    filter((r) => r instanceof NavigationEnd),
    map((r) => r as NavigationEnd),
    map((r: NavigationEnd) => new LogEventAction('Navigation End', {
      url: r.url,
    }))
  ))

  logEvent$ = createEffect(() => this.actions$.pipe(
    ofType(AnalyticsActionType.LogEvent),

    mergeMap((a: LogEventAction) => this.client.post('http://localhost:3000/events', {
      event: a.event,
      timestamp: new Date(),
      ...a.payload
    }))
  ), {
    dispatch: false
  });
}

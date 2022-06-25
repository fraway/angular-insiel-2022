import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { AppState } from '../reducers';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private store: Store<AppState>, private client: HttpClient) { }

  load() {
    this.store.dispatch({ type: '[Events Page] Load' });
  }

  list() {
    // return this.client.get<Event[]>('http://localhost:3000/events').pipe(
    //   // map((items: Event[]) =>
    //   //   items.sort((a, b) =>
    //   //     getMilliseconds(a.timestamp) - getMilliseconds(b.timestamp)
    //   //   )
    //   // )
    // );
    return this.store.select('events');
  }

  fetch() {
    return this.client.get<Event[]>('http://localhost:3000/events').pipe();
  }
}

function getMilliseconds(d?: Date): number {
  if (d != undefined) {
    return d.getSeconds();
  }

  return 0;
}

export interface Event {
  id: number;
  event: string;
  timestamp?: Date;
}

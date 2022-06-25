import { Component, OnInit } from '@angular/core';
import { EventsService } from './services/events.service';

@Component({
  selector: 'app-events',
  template: `
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>EVENT</th>
          <th>DATE</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let event of (events$ | async)">
          <td>{{ event.id }}</td>
          <td>{{ event.event }}</td>
          <td>{{ event.timestamp | date }}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [
  ]
})
export class EventsComponent implements OnInit {
  events$ = this._events.list();

  constructor(private _events: EventsService) { }

  ngOnInit(): void {
    this._events.load();
  }
}

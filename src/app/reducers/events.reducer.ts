import { Action } from "@ngrx/store";
import { Event } from "../services/events.service";

const initialState: Event[] = [];
export function eventsReducer(state = initialState, action: Action): Event[] {
  switch (action.type) {

    case '[Events Page] Loaded':
      return (action as EventsLoadedAction).events;

    default:
      return state;
  }
}

export class EventsLoadedAction implements Action {
  readonly type = '[Events Page] Loaded';

  constructor(public events: Event[]) { }
}

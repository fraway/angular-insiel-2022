import { Routes } from "@angular/router";
import { BankAccountComponent } from "./bank-account/bank-account.component";
import { EventsComponent } from "./events.component";
import { HomeComponent } from "./home.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'bank',
    component: BankAccountComponent
  },
  {
    path: 'events',
    component: EventsComponent
  }
]

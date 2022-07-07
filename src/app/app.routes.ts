import { Routes } from "@angular/router";
import { DenyGuestsGuard } from "./auth/deny-guests.guard";
import { LoginComponent } from "./auth/login/login.component";
import { BankAccountComponent } from "./bank-account/bank-account.component";
import { BankCardDetailComponent } from "./bank-card-detail/bank-card-detail.component";
import { BankCardsComponent } from "./bank-cards/bank-cards.component";
import { BankCommunicationsComponent } from "./bank-communications/bank-communications.component";
import { BankNavigationComponent } from "./bank-navigation/bank-navigation.component";
import { EventsComponent } from "./events.component";
import { HomeComponent } from "./home.component";
import { NotFoundComponent } from "./not-found/not-found.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'docs',
    loadChildren: () => import('./docs/docs.module').then(m => m.DocsModule)
  },
  {
    path: 'app',
    canActivate: [DenyGuestsGuard],
    children: [
      {
        path: 'bank',
        component: BankNavigationComponent,
        children: [
          {
            path: 'account',
            component: BankAccountComponent,
          },
          {
            path: 'cards',
            component: BankCardsComponent,
            children: [
              {
                path: 'detail/:id',
                component: BankCardDetailComponent
              }
            ]
          },
          {
            path: 'communications',
            component: BankCommunicationsComponent,
          }
        ]
      },
      {
        path: 'bank-v1',
        pathMatch: 'full',
        redirectTo: 'bank'
      },
      {
        path: 'events',
        component: EventsComponent
      },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]

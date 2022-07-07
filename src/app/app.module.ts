import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ReactiveUserFormComponent } from './reactive-user-form/reactive-user-form.component';
import { SearchComponent } from './search/search.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { AnalyticsEffects } from './analytics.effects';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { routes } from './app.routes';
import { EventsComponent } from './events.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthEffects } from './auth.effects';
import { BankNavigationComponent } from './bank-navigation/bank-navigation.component';
import { BankCardsComponent } from './bank-cards/bank-cards.component';
import { BankCommunicationsComponent } from './bank-communications/bank-communications.component';
import { BankCardDetailComponent } from './bank-card-detail/bank-card-detail.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserFormComponent,
    ReactiveUserFormComponent,
    SearchComponent,
    NavigationComponent,
    BankAccountComponent,
    HomeComponent,
    EventsComponent,
    NotFoundComponent,
    LoginComponent,
    BankNavigationComponent,
    BankCardsComponent,
    BankCommunicationsComponent,
    BankCardDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(routes, {
      enableTracing: false
    }),
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects, AnalyticsEffects, AuthEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

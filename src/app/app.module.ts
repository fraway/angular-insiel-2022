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
    EventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects, AnalyticsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

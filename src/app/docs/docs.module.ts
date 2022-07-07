import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsRoutingModule } from './docs-routing.module';
import { DocsHomeComponent } from './docs-home/docs-home.component';
import { LearnMoreComponent } from './learn-more/learn-more.component';
import { SharedModule } from '../shared/shared.module';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { articlesReducer } from './reducers/articles.reducer';

export interface DocsState {
  articles: string[];
}

export const reducers: ActionReducerMap<DocsState> = {
  articles: articlesReducer
};


@NgModule({
  declarations: [
    DocsHomeComponent,
    LearnMoreComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DocsRoutingModule,
    StoreModule.forFeature('docs', reducers)
  ]
})
export class DocsModule { }

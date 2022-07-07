import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { DocsState } from '../docs.module';
import { loadArticles, selectArticles } from '../reducers/articles.reducer';

@Component({
  selector: 'app-docs-home',
  templateUrl: './docs-home.component.html',
  styleUrls: ['./docs-home.component.css']
})
export class DocsHomeComponent implements OnInit {
  articles$ = this.store.select(selectArticles);

  constructor(private store: Store<DocsState>) {
  }

  ngOnInit(): void {
  }

  loadDocs() {
    console.log('it works')

    this.store.dispatch(loadArticles())
  }
}

import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { AppState } from "src/app/reducers";
import { DocsState } from "../docs.module";

export const loadArticles = createAction('[Docs Page] Load Articles')

const initialState: string[] = []

export const articlesReducer = createReducer(initialState, on(loadArticles, () => ["test 1", "test 2", "test 3"]))

export const selectFeature = createFeatureSelector<DocsState>('docs');

export const selectArticles = createSelector(
    selectFeature,
    (state: DocsState) => state.articles
);
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsHomeComponent } from './docs-home/docs-home.component';
import { LearnMoreComponent } from './learn-more/learn-more.component';

const routes: Routes = [
  {
    path: '',
    component: DocsHomeComponent,
  },
  {
    path: 'learn-more',
    component: LearnMoreComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule { }

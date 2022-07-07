import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperButtonComponent } from './super-button/super-button.component';



@NgModule({
  declarations: [
    SuperButtonComponent
  ],
  exports: [
    SuperButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

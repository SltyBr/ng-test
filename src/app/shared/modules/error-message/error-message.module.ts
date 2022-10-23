import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    ErrorMessageComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    ErrorMessageComponent
  ]
})
export class ErrorMessageModule { }

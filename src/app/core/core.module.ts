import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {NotFoundComponentComponent} from './components/not-found-component/not-found-component.component';

@NgModule({
  declarations: [
    NotFoundComponentComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    NotFoundComponentComponent
  ]
})
export class CoreModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {MatCardModule} from '@angular/material/card';
import {NotFoundComponentComponent} from './components/not-found-component/not-found-component.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponentComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    HeaderComponent,
    NotFoundComponentComponent
  ]
})
export class CoreModule {
}

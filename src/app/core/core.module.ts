import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {NotFoundComponentComponent} from './components/not-found-component/not-found-component.component';
import {SharedModule} from '../shared/shared.module';
import {PageComponent} from './components/page/page.component';

@NgModule({
  declarations: [
    NotFoundComponentComponent,
    PageComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    SharedModule
  ],
  exports: [
    NotFoundComponentComponent
  ]
})
export class CoreModule {
}

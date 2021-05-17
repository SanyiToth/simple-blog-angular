import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from '../core/components/header/header.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [HeaderComponent]
})
export class SharedModule {
}

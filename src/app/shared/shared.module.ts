import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from '../core/components/header/header.component';
import {MatCardModule} from '@angular/material/card';
import {LoginComponent} from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    LoginComponent]
})
export class SharedModule {
}

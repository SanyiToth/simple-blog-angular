import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent} from './contact.component';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {AppRoutingModule} from '../../app-routing.module';



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatCardModule,
    AppRoutingModule
  ]
})
export class ContactModule {
}
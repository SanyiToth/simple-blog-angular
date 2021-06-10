import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent} from './contact.component';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { ContactRoutingModule } from './contact-routing.module';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatCardModule,
    ContactRoutingModule,
    SharedModule
  ]
})
export class ContactModule {
}

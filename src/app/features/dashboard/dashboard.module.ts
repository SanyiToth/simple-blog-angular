import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {DashboardComponent} from './dashboard.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    DashboardRoutingModule,
    MatCardModule
  ]
})
export class DashboardModule {
}

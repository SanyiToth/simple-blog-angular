import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {DashboardComponent} from './dashboard.component';
import {MatCardModule} from '@angular/material/card';
import { TabNavigationComponent } from './tab-navigation/tab-navigation.component';
import {MatListModule} from '@angular/material/list';
import { PostsDashboardComponent } from './posts-dashboard/posts-dashboard.component';



@NgModule({
  declarations: [
    DashboardComponent,
    TabNavigationComponent,
    PostsDashboardComponent,

  ],
  imports: [
    SharedModule,
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatListModule
  ]
})
export class DashboardModule {
}

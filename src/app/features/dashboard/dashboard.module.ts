import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {DashboardComponent} from './dashboard.component';
import {MatCardModule} from '@angular/material/card';
import { PostsDashboardComponent } from './posts-dashboard/posts-dashboard.component';
import { CommentsDashboardComponent } from './comments-dashboard/comments-dashboard.component';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';


@NgModule({
  declarations: [
    DashboardComponent,
    PostsDashboardComponent,
    CommentsDashboardComponent,
    PageDashboardComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    BackButtonDisableModule.forRoot()
  ]
})
export class DashboardModule {
}

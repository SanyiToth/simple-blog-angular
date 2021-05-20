import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {AuthGuard} from '../../auth/auth.guard';
import {PostsDashboardComponent} from './posts-dashboard/posts-dashboard.component';


const routes: Routes = [
  {path: '', canActivate: [AuthGuard], component: DashboardComponent},
  {path: 'posts', canActivate: [AuthGuard], component: PostsDashboardComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponentComponent} from './core/components/not-found-component/not-found-component.component';
import {PageComponent} from './core/components/page/page.component';
import {AuthGuard} from './auth/auth.guard';
import {LoginComponent} from './shared/login/login.component';

const routes: Routes = [
  {path: 'contact', loadChildren: () => import('./features/contact/contact.module').then(m => m.ContactModule)},
  {path: 'page', component: PageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', canLoad: [AuthGuard], loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: '404', component: NotFoundComponentComponent},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

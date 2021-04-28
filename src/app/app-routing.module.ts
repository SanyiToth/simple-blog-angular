import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponentComponent} from './core/components/not-found-component/not-found-component.component';
import {PageComponent} from './core/components/page/page.component';

import {ContactComponent} from './features/contact/contact.component';
import {PostsComponent} from './features/posts/posts-container/posts.component';

const routes: Routes = [
  {path: '', component: PostsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'page', component: PageComponent},
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

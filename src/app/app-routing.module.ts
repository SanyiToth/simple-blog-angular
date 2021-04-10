import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from './posts/posts.component';
import {PostDetailsComponent} from './post-details/post-details.component';
import {HeaderComponent} from './header/header.component';
import {NotFoundComponentComponent} from './not-found-component/not-found-component.component';

const routes: Routes = [
  {path: '', component: PostsComponent},
  {path: 'posts', component: PostDetailsComponent},
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

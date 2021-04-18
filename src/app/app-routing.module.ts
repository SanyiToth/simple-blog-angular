import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PageComponent} from 'src/app/pages/terms-and-conditions/page.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {NotFoundComponentComponent} from './pages/not-found-component/not-found-component.component';
import {PostsComponent} from './pages/posts/posts.component';
import {PostDetailsComponent} from './features/post-details/post-details.component';
import {ContactComponent} from './pages/contact/contact.component';

const routes: Routes = [
  {path: '', component: PostsComponent},
  {
    path: 'posts', children: [
      {path: ':id', component: PostDetailsComponent}
    ]
  },
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'terms-and-conditions', component: PageComponent},
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

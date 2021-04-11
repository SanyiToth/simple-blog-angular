import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from './posts/posts.component';
import {PostDetailsComponent} from './post-details/post-details.component';
import {NotFoundComponentComponent} from './not-found-component/not-found-component.component';
import {AboutUsComponent} from 'src/app/about-us/about-us.component';
import {ContactComponent} from 'src/app/contact/contact.component';
import {PageComponent} from 'src/app/page/page.component';

const routes: Routes = [
  {path: '', component: PostsComponent},
  {path: 'posts/:id', component: PostDetailsComponent},
  {path: 'about-us', component: AboutUsComponent},
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

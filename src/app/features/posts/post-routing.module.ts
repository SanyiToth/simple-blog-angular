import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostDetailsComponent} from './post-details/post-details.component';
import {PostsComponent} from './posts-container/posts.component';



const routes: Routes = [
  {path: '', component: PostsComponent},
  {
    path: 'posts', children: [
      {path: ':id', component: PostDetailsComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PostRoutingModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostDetailsComponent} from './post-details/post-details.component';
import {PostsComponent} from './posts-container/posts.component';
import {PostResolver} from './post.resolver';


const routes: Routes = [
  {
    path: '', resolve: {
      posts: PostResolver
    },
    component: PostsComponent
  },
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

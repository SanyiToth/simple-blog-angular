import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostsComponent} from './posts-container/posts.component';
import {UcfirstPipe} from 'src/app/core/pipes/ucfirst.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {PostItemComponent} from 'src/app/features/posts/post-item/post-item.component';
import {TrucatePipe} from 'src/app/core/pipes/trucate.pipe';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {PostDetailsComponent} from 'src/app/features/posts/post-details/post-details.component';
import {PostRoutingModule} from './post-routing.module';
import {CommentsModule} from '../comments/comments.module';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [
    PostsComponent,
    PostDetailsComponent,
    PostItemComponent,
    UcfirstPipe,
    TrucatePipe,
  ],
  exports: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    RouterModule,
    PostRoutingModule,
    CommentsModule,
    SharedModule
  ]

})
export class PostsModule {
}

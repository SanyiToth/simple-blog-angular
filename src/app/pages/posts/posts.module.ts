import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostsComponent} from './posts.component';
import {HighlightPipe} from 'src/app/core/pipes/highlight.pipe';
import {JoinPipe} from 'src/app/core/pipes/join.pipe';
import {ReversePipe} from 'src/app/core/pipes/reverse.pipe';
import {SumPipe} from 'src/app/core/pipes/sum.pipe';
import {UcfirstPipe} from 'src/app/core/pipes/ucfirst.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {PostItemComponent} from 'src/app/pages/posts/post-item/post-item.component';
import {TrucatePipe} from 'src/app/core/pipes/trucate.pipe';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {PostDetailsComponent} from 'src/app/features/post-details/post-details.component';
import { PostRoutingModule } from './post-routing.module';
import {CommentContainerComponent} from '../../features/comments/comment-container.component';
import {CommentModule} from '../../features/comments/comment.module';



@NgModule({
  declarations: [
    PostsComponent,
    PostDetailsComponent,
    HighlightPipe,
    JoinPipe,
    ReversePipe,
    SumPipe,
    UcfirstPipe,
    PostItemComponent,
    TrucatePipe,
    CommentContainerComponent
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
    CommentModule,
  ]

})
export class PostsModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostsComponent} from './posts.component';
import {HighlightPipe} from 'src/app/pipes/highlight.pipe';
import {JoinPipe} from 'src/app/pipes/join.pipe';
import {ReversePipe} from 'src/app/pipes/reverse.pipe';
import {SumPipe} from 'src/app/pipes/sum.pipe';
import {UcfirstPipe} from 'src/app/pipes/ucfirst.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {PostItemComponent} from 'src/app/posts/post-item/post-item.component';
import {TrucatePipe} from 'src/app/pipes/trucate.pipe';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from 'src/app/header/header.component';
import {PostDetailsComponent} from 'src/app/post-details/post-details.component';
import { PostRoutingModule } from './post-routing.module';
import {CommentContainerComponent} from '../comments/comment-container.component';
import {CommentModule} from '../comments/comment.module';



@NgModule({
  declarations: [
    HeaderComponent,
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

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostsComponent} from './posts.component';
import {HighlightPipe} from 'src/app/highlight.pipe';
import {JoinPipe} from 'src/app/join.pipe';
import {ReversePipe} from 'src/app/reverse.pipe';
import {SumPipe} from 'src/app/sum.pipe';
import {UcfirstPipe} from 'src/app/ucfirst.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {PostItemComponent} from 'src/app/posts/post-item/post-item.component';
import {TrucatePipe} from 'src/app/trucate.pipe';


@NgModule({
  declarations: [
    PostsComponent,
    HighlightPipe,
    JoinPipe,
    ReversePipe,
    SumPipe,
    UcfirstPipe,
    PostItemComponent,
    TrucatePipe],
  exports: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
  ]
})
export class PostsModule {
}

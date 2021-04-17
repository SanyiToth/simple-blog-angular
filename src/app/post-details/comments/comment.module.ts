import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommentItemComponent} from './comment-item/comment-item.component';
import {CommentContainerComponent} from './comment-container.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [CommentItemComponent, CommentContainerComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    CommentContainerComponent
  ]
})
export class CommentModule {
}

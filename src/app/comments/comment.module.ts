import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommentItemComponent} from './comment-item/comment-item.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [CommentItemComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    CommentItemComponent
  ]
})
export class CommentModule {
}

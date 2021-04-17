import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentItemComponent } from './comment-item/comment-item.component';
import { CommentContainerComponent } from './comment-container.component';



@NgModule({
  declarations: [CommentItemComponent, CommentContainerComponent],
  imports: [
    CommonModule
  ]
})
export class CommentModule { }

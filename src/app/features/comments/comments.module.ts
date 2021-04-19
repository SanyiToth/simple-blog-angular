import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommentItemComponent} from './comments-container/comment-item/comment-item.component';
import {MatCardModule} from '@angular/material/card';
import { CommentFormContainerComponent } from './comment-form-container/comment-form-container.component';
import { CommentFormComponent } from './comment-form-container/comment-form/comment-form.component';

@NgModule({
  declarations: [CommentItemComponent, CommentFormContainerComponent, CommentFormComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    CommentItemComponent,
    CommentFormContainerComponent
  ]
})
export class CommentModule {
}

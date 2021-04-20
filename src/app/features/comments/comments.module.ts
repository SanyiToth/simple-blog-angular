import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommentItemComponent} from './comment-item/comment-item.component';
import {MatCardModule} from '@angular/material/card';
import {CommentFormContainerComponent} from './comment-form-container/comment-form-container.component';
import {CommentFormComponent} from './comment-form/comment-form.component';
import {CommentContainerComponent} from './comments-container/comment-container.component';
import {RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CommentItemComponent, CommentFormContainerComponent, CommentFormComponent, CommentContainerComponent],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    CommentContainerComponent,
    CommentFormContainerComponent
  ]
})
export class CommentsModule {
}

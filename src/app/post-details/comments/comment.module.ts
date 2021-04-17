import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommentItemComponent} from './comment-item/comment-item.component';
import {CommentContainerComponent} from './comment-container.component';
import {MatCardModule} from '@angular/material/card';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpErrorInterceptor} from '../../posts/http-error.interceptor';


@NgModule({
  declarations: [CommentItemComponent, CommentContainerComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    CommentContainerComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ]
})
export class CommentModule {
}

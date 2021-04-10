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
import {HttpClientModule} from '@angular/common/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpErrorInterceptor} from './http-error.interceptor';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from 'src/app/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
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
    HttpClientModule,
    RouterModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ]
})
export class PostsModule {
}

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {AppComponent} from './app.component';
import {PostsModule} from './posts/posts.module';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {NotFoundComponentComponent} from './not-found-component/not-found-component.component';
import {FooterComponent} from './footer/footer.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {PageComponent} from './page/page.component';
import {ContactModule} from './contact/contact.module';
import {CommentModule} from './comments/comment.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpErrorInterceptor} from './http-error/http-error.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponentComponent,
    FooterComponent,
    AboutUsComponent,
    PageComponent,

  ],
  imports: [
    BrowserModule,
    PostsModule,
    MatCardModule,
    MatListModule,
    AppRoutingModule,
    RouterModule,
    ContactModule,
    CommentModule
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}

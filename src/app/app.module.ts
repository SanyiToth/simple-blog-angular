import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {AppComponent} from './app.component';
import {PostsModule} from './pages/posts/posts.module';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {NotFoundComponentComponent} from './pages/not-found-component/not-found-component.component';
import {FooterComponent} from './features/footer/footer.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {PageComponent} from './pages/terms-and-conditions/page.component';
import {ContactModule} from './pages/contact/contact.module';
import {CommentModule} from './features/comments/comment.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpErrorInterceptor} from './core/interceptors/http-error/http-error.interceptor';


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

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {AppComponent} from './app.component';
import {PostsModule} from './features/posts/posts.module';
import {RouterModule} from '@angular/router';
import {NotFoundComponentComponent} from './core/components/not-found-component/not-found-component.component';
import {FooterComponent} from './core/components/footer/footer.component';
import {ContactModule} from './features/contact/contact.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {PageComponent} from './core/components/page/page.component';
import {HttpErrorInterceptor} from './core/interceptors/http-error/http-error.interceptor';
import {CommentsModule} from './features/comments/comments.module';



@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponentComponent,
    FooterComponent,
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
    CommentsModule
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

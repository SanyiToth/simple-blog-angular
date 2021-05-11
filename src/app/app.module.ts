import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {MatCardModule} from '@angular/material/card';
import {PostsModule} from './features/posts/posts.module';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {CommentsModule} from './features/comments/comments.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpErrorInterceptor} from './core/interceptors/http-error/http-error.interceptor';
import {FooterComponent} from './core/components/footer/footer.component';
import {CoreModule} from './core/core.module';
import {AuthModule} from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    PostsModule,
    MatCardModule,
    AppRoutingModule,
    RouterModule,
    CommentsModule,
    CoreModule,
    AuthModule
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

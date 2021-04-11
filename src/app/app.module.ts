import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {AppComponent} from './app.component';
import {PostsModule} from './posts/posts.module';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponentComponent,

  ],
  imports: [
    BrowserModule,
    PostsModule,
    MatCardModule,
    AppRoutingModule,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

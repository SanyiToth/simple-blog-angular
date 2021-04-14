import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {AppComponent} from './app.component';
import {PostsModule} from './posts/posts.module';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { PageComponent } from './page/page.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponentComponent,
    FooterComponent,
    AboutUsComponent,
    ContactComponent,
    PageComponent,

  ],
  imports: [
    BrowserModule,
    PostsModule,
    MatCardModule,
    MatListModule,
    AppRoutingModule,
    RouterModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

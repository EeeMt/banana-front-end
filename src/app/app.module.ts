import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MarkdownModule} from 'ngx-markdown';
import {ArticleListComponent} from './article-list/article-list.component';
import {ArticleDetailComponent} from './article-detail/article-detail.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {ArchivesComponent} from './archives/archives.component';
import {CategoriesComponent} from './categories/categories.component';
import {AboutComponent} from './about/about.component';
import {PlaygroundComponent} from './playground/playground.component';
import {ScrollTopComponent} from './scroll-top/scroll-top.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {AboutBlogComponent} from './about-blog/about-blog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    FooterComponent,
    HeaderComponent,
    ArchivesComponent,
    CategoriesComponent,
    AboutComponent,
    PlaygroundComponent,
    ScrollTopComponent,
    AboutMeComponent,
    AboutBlogComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

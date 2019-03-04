import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticleDetailComponent} from './article-detail/article-detail.component';
import {ArticleListComponent} from './article-list/article-list.component';
import {ArchivesComponent} from './archives/archives.component';
import {CategoriesComponent} from './categories/categories.component';
import {AboutComponent} from './about/about.component';
import {PlaygroundComponent} from './playground/playground.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {AboutBlogComponent} from './about-blog/about-blog.component';
import {TagsComponent} from './tags/tags.component';

const routes: Routes = [
  {path: '', redirectTo: 'article', pathMatch: 'full'},
  {path: 'article', component: ArticleListComponent},
  {path: 'archives', component: ArchivesComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'tags', component: TagsComponent},
  {
    path: 'about', component: AboutComponent,
    children: [
      {path: 'about-me', component: AboutMeComponent},
      {path: 'about-blog', component: AboutBlogComponent},
      {path: '', component: AboutMeComponent}
    ]
  },
  {path: 'playground', component: PlaygroundComponent},
  {path: 'article/detail/:id', component: ArticleDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticleDetailComponent} from './article-detail/article-detail.component';
import {ArticleListComponent} from './article-list/article-list.component';
import {ArchivesComponent} from './archives/archives.component';
import {CategoriesComponent} from './categories/categories.component';
import {AboutComponent} from './about/about.component';
import {PlaygroundComponent} from './playground/playground.component';

const routes: Routes = [
  {path: 'article', component: ArticleListComponent},
  {path: 'archives', component: ArchivesComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'playground', component: PlaygroundComponent},
  {path: '', redirectTo: 'article', pathMatch: 'full'},
  {path: 'article/detail/:id', component: ArticleDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

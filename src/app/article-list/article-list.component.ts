import {Component, OnInit} from '@angular/core';
import {ArticleListItem} from '../model/articleListItem';
import {ARTICLE_LIST_ITEMS} from '../mock/mock-articles';
import {ArticleService} from '../service/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articleListItems: ArticleListItem[];

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.articleListItems = ARTICLE_LIST_ITEMS;
    console.log(this.articleListItems);
  }

}

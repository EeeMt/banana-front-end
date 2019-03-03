import {Component, OnInit} from '@angular/core';
import {ArticleListItem} from '../articleListItem';
import {ARTICLE_LIST_ITEMS} from '../mock-articles';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articleListItems: ArticleListItem[];

  constructor() {
  }

  ngOnInit() {
    this.articleListItems = ARTICLE_LIST_ITEMS;
    console.log(this.articleListItems);
  }

  onFocus() {
    console.log('on focus');
  }
}

import {Component, OnInit} from '@angular/core';
import {Article} from '../model/article';
import {ARTICLE} from '../mock/mock-articles';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  article: Article;

  constructor() {
  }

  ngOnInit() {
    this.article = ARTICLE;
  }

}

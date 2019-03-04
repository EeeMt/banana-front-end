import {Component, OnInit} from '@angular/core';
import {Article} from '../model/article';
import {ArticleService} from '../service/article.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  public loading = false;
  article: Article;

  constructor(private articleService: ArticleService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.fetch();
    console.log('finish init');
  }

  fetch(): void {
    this.loading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.articleService.getArticleById(id)
      .subscribe(
        res => {
          this.loading = false;
          this.article = res;
        },
        err => {
          this.loading = false;
        }
      );

  }
}

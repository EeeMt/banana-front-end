import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Article} from '../model/article';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ArticleService implements OnInit {

  private routUrl = 'http://localhost:8080/home';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  getArticleById(id: number): Observable<Article> {
    const url = `${this.routUrl}/${id}`;
    return this.http.get<Article>(url);
  }
}

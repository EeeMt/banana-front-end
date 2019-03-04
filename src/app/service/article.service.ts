import {OnInit} from '@angular/core';
import {AccessLogService} from './access-log.service';

export class ArticleService implements OnInit {

  constructor(private accessLogService: AccessLogService) {
  }

  ngOnInit(): void {
  }
}

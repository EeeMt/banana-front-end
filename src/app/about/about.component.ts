import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  selectedItem = 'about-me';

  constructor() {
  }

  ngOnInit() {
  }

  setActive(target: string) {
    this.selectedItem = target;
  }
}

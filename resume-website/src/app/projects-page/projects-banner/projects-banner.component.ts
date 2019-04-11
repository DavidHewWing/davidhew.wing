import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-banner',
  templateUrl: './projects-banner.component.html',
  styleUrls: ['./projects-banner.component.scss']
})
export class ProjectsBannerComponent implements OnInit {

  displayText = false;

  constructor() { }

  ngOnInit() {
  }

  showText() {
    this.displayText = true;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit {

  displayText = false;

  constructor() { }

  ngOnInit() {
  }

  showText() {
    this.displayText = true;
  }

}

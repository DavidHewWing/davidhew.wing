import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  typed: Typed;

  constructor() { }

  ngOnInit() {

    const options = {
      strings: ['', 'Innovation.', 'Discovery.'],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: true
     };
 
    const typed = new Typed('.typed-element', options);
  }

}

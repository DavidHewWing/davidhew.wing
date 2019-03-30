import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})


export class KnowledgeComponent implements OnInit {

  divWidth = 0;
  photos = [
    '../../../assets/img/angular.svg',
    '../../../assets/img/ngrx.svg',
    '../../../assets/img/ruby.svg',
    '../../../assets/img/android.svg',
    '../../../assets/img/git.svg',
    '../../../assets/img/linux.svg',
    '../../../assets/img/java.svg',
    '../../../assets/img/python.svg',
  ];

  @ViewChild('parentDiv') parentDiv: ElementRef;
  @HostListener('window:resize') onResize() {
    if (this.parentDiv) {
      this.divWidth = this.parentDiv.nativeElement.clientWidth;
    }
  }

  constructor() { }

  ngOnInit() {
    if (this.parentDiv) {
      this.divWidth = this.parentDiv.nativeElement.clientWidth;
    }
  }

}

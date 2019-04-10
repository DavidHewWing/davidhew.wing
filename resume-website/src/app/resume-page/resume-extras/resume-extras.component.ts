import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-resume-extras',
  templateUrl: './resume-extras.component.html',
  styleUrls: ['./resume-extras.component.scss']
})
export class ResumeExtrasComponent implements OnInit {

  divWidth = 0;

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

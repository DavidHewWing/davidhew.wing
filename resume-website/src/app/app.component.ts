import { Component, ViewChild, HostListener, ElementRef, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'resume-website';
  divWidth = 0;

  @ViewChild('parentDiv') parentDiv: ElementRef;
  @HostListener('window:resize') onResize() {
    if (this.parentDiv) {
      this.divWidth = this.parentDiv.nativeElement.clientWidth;
    }
  }

  constructor(@Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
    if (this.parentDiv) {
      this.divWidth = this.parentDiv.nativeElement.clientWidth;
    }
  }

  redirectToLinkedIn() {
    this.document.location.href = 'https://www.linkedin.com/in/david-hew-wing-8b4381152/';
  }

  redirectToGitHub() {
    this.document.location.href = 'https://github.com/DavidHewWing';
  }

}

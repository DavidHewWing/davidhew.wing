import { Component, ViewChild, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'resume-website';
  divWidth = 0;

  @ViewChild('parentDiv') parentDiv: ElementRef;
  @HostListener('window:resize') onResize() {
    if (this.parentDiv) {
      this.divWidth = this.parentDiv.nativeElement.clientWidth;
    }
  }


}

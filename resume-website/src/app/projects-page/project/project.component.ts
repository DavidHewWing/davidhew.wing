import { Component, OnInit, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() title;
  @Input() description;
  @Input() color;
  @Input() linkUrl;
  @Input() techUsed;
  @Input() date;

  constructor(@Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
  }

  redirectToRepo() {
    this.document.location.href = this.linkUrl;
  }
}

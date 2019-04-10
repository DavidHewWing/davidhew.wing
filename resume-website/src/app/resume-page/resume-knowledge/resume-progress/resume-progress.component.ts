import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resume-progress',
  templateUrl: './resume-progress.component.html',
  styleUrls: ['./resume-progress.component.scss']
})
export class ResumeProgressComponent implements OnInit {

  @Input() value;
  @Input() imgUrl;
  @Input() description;

  constructor() { }

  ngOnInit() {
  }

}

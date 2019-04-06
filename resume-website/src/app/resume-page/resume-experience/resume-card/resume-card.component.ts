import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resume-card',
  templateUrl: './resume-card.component.html',
  styleUrls: ['./resume-card.component.scss']
})
export class ResumeCardComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() imgUrl: string;
  @Input() description: string;

  constructor() { }

  ngOnInit() {
    console.log(this.title);
    console.log(this.subtitle);
    console.log(this.imgUrl);
    console.log(this.description);
  }

}

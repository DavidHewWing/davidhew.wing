import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})


export class KnowledgeComponent implements OnInit {


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

  constructor() { }

  ngOnInit() {
  }

}

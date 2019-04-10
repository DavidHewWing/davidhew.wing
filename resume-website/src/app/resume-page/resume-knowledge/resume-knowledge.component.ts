import { Component, OnInit } from '@angular/core';

class Bar {
  constructor(private value: number, private imgUrl: string, private description: string) {}
}

@Component({
  selector: 'app-resume-knowledge',
  templateUrl: './resume-knowledge.component.html',
  styleUrls: ['./resume-knowledge.component.scss']
})
export class ResumeKnowledgeComponent implements OnInit {

  bars: Bar[] = [];

  constructor() { }

  ngOnInit() {
    const angularBar = new Bar(100, '../../../../assets/img/angular.svg', 'Fluent');
    const javaBar = new Bar(100, '../../../../assets/img/java.svg', 'Fluent');
    const gitBar = new Bar(100, '../../../../assets/img/git.svg', 'Fluent');
    const androidBar = new Bar(100, '../../../../assets/img/android.svg', 'Fluent');
    const pythonBar = new Bar(75, '../../../../assets/img/python.svg', 'Advanced');
    const linuxBar = new Bar(50, '../../../../assets/img/linux.svg', 'Working');
    const rubyBar = new Bar(50, '../../../../assets/img/ruby.svg', 'Working');

    this.bars.push(angularBar);
    this.bars.push(javaBar);
    this.bars.push(gitBar);
    this.bars.push(androidBar);
    this.bars.push(pythonBar);
    this.bars.push(linuxBar);
    this.bars.push(rubyBar);
  }

}

import { Component, OnInit } from '@angular/core';

class Bar {
  constructor(private value: number, private imgUrl: string) {}
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
    const angularBar = new Bar(100, '../../../../assets/img/angular.svg');
    const javaBar = new Bar(100, '../../../../assets/img/java.svg');
    const gitBar = new Bar(100, '../../../../assets/img/git.svg');
    const androidBar = new Bar(100, '../../../../assets/img/android.svg');
    const pythonBar = new Bar(75, '../../../../assets/img/python.svg');
    const linuxBar = new Bar(50, '../../../../assets/img/linux.svg');
    const rubyBar = new Bar(50, '../../../../assets/img/ruby.svg');

    this.bars.push(angularBar);
    this.bars.push(javaBar);
    this.bars.push(gitBar);
    this.bars.push(androidBar);
    this.bars.push(pythonBar);
    this.bars.push(linuxBar);
    this.bars.push(rubyBar);
  }

}

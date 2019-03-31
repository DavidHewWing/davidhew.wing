import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
  }

  redirectToLinkedin() {
    this.document.location.href = 'https://www.linkedin.com/in/david-hew-wing-8b4381152/';
  }

  redirectToGithub() {
    this.document.location.href = 'https://github.com/DavidHewWing';
  }

}

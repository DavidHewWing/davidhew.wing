import { Component, OnInit } from '@angular/core';

class Project {
  constructor(private title: string, private description: string, private linkUrl: string, private techUsed: string,
    private color: string, private date: string) { }
}

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {


  projects: Project[] = [];
  blue = '#89BBFE';
  green = '#AEFFA5';
  yellow = '#FFDB89';
  pink = '#FFA0A0';
  lightgreen = '#C7EDD3';

  constructor() { }

  ngOnInit() {
    const resumeWebsite = new Project('david.hew-wing',
    '"davidhew.wing" is this website you are currently viewing. Designed and built by yours truly.' +
    'Written in Angular 7, my website took a lot of planning, time and effort to build.',
    'https://github.com/DavidHewWing/davidhew.wing',
    'Angular, Wireframe Making, Web Design, SCSS.', this.blue,
     'February 2019 - April 2019');
    const safeChat = new Project('Safe Chat', 'A potential chat-room platform, that filtes out toxic/bad words ' +
    'allowing people to improve their online experience. A potential use is in many MMORPG, or online games, in which ' +
    'many players can be banne for being toxic. Worked on at a Hackathon with "Derek Shao", "Thomas Leung" and "Kyle Pinkerton"',
    'https://github.com/DavidHewWing/uOttaHack2019',
    'Angular, Google AutoML API, Machine Learning, Google Cloud', this.green,
    'February 2019');
    const hearthstone = new Project('Hearthstone Card Finder',
    'When I was an avid player of Hearthstone I built this Android Application.' +
    'If you did not know Hearthstone was a fantasy card game. ' +
    'It was built mainly for fun and served for a great learning experience on using APIs within an Android Application.',
    'https://github.com/DavidHewWing/HearthstoneCardFinder',
    'Android, Java, Hearthstone Card API', this.yellow,
    'October 2018 - November 2018'
     );
     const zork = new Project('Zork: Prison Break',
     'Rodin Habib, Aadithya Shankar and My take on "Zork: A Text Based Adventure". Was made in pure Java ' +
     'was made for pure fun. This project made me fall in love with programming.',
     'https://github.com/DavidHewWing/zork-prison-break',
     'Java', this.pink,
     'May 2017 - June 2017');
    this.projects.push(resumeWebsite);
    this.projects.push(safeChat);
    this.projects.push(hearthstone);
    this.projects.push(zork);
  }

}

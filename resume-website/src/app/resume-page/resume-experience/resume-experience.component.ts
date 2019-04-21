import { Component, OnInit } from '@angular/core';

class Card {
  constructor(public title: string, public subtitle: string, public imgUrl: string, public description: string) {}
}

@Component({
  selector: 'app-resume-experience',
  templateUrl: './resume-experience.component.html',
  styleUrls: ['./resume-experience.component.scss']
})

export class ResumeExperienceComponent implements OnInit {

  cards: Card[] = [];

  constructor() { }

  ngOnInit() {
    const uottawaCard = new Card('University of Ottawa',
     'Second-Year Software Engineering:  2017-Current',
     './assets/img/uottawa.jpg',
     'Enrolled at uOttawa Software Engineering in 2017, and currently entering my fourth study term. My phenomenal professors are ' +
     'pushing me to be more innovative and become a better problem solver. My experience in the uOttawa GeeGees Ultimate Frisbee Team ' +
     'inspires me to be a great leader and teaches me to always strive to be better. Most importantly uOttawa helped me to discover' +
     ' my passion for Software Engineering.');
    const cfiaCard = new Card('Canadian Food Insepction Agency',
    'Android Engineer Intern: May 2018 - September 2018. Ottawa, Ontario',
    './assets/img/canada.jpg',
    'Working at CFIA was my first experience working for the public sector. Showing how important a work-culture in which everyone is not' +
    ' afraid to speak-up is. This was also the first time I experienced how my work can directly change the world. The application' +
    ' I helped developed is having a direct impact on many CFIA inspectors and as a result, a direct impact of many people with fatal' +
    ' allergies. This is where, I fell in love with the world of Software Development.' +
    ' \nSoftware Engineers have the potential to change the world, even if it is a small change. Once I realized this, and saw the' +
    ' how my work impacted lives of many people there was no turning back.'
    );
    const jsiCard = new Card('Jatom System Inc.',
    'Software Developer Intern: Jan 2019 - May 2019. Kanata, Ontario',
    './assets/img/jsi-building.jpg',
    'JSI Telecom was a great gateway into the software engineering professionalism world. I practiced the basic concepts of AGILE' +
    ' which is much more in depth and though out then I once thought. JSI was a customer-driven company, I experienced' +
    ' a culture in which was welcoming to new customers and dependable to old customers, showing me that empathy and understanding' +
    ' goes a long way. The one thing that I am most inspired from at JSI was my co-workers. At JSI anyone was willing to take time off' +
    ' their day to share their knowledge. My co-workers allowed my confidence to develop quality software to grow.' +
    ' \n\n In the future, I will try to emulate the characteristics, and principles that my co-workers showed.'
    );
    this.cards.push(uottawaCard);
    this.cards.push(cfiaCard);
    this.cards.push(jsiCard);
  }

}

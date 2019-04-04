import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeExperienceComponent } from './resume-experience.component';

describe('ResumeExperienceComponent', () => {
  let component: ResumeExperienceComponent;
  let fixture: ComponentFixture<ResumeExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

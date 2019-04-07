import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeProgressComponent } from './resume-progress.component';

describe('ResumeProgressComponent', () => {
  let component: ResumeProgressComponent;
  let fixture: ComponentFixture<ResumeProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

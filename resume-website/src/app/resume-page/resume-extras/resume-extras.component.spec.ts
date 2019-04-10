import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeExtrasComponent } from './resume-extras.component';

describe('ResumeExtrasComponent', () => {
  let component: ResumeExtrasComponent;
  let fixture: ComponentFixture<ResumeExtrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeExtrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

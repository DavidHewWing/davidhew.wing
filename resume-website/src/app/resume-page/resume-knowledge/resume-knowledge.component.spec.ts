import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeKnowledgeComponent } from './resume-knowledge.component';

describe('ResumeKnowledgeComponent', () => {
  let component: ResumeKnowledgeComponent;
  let fixture: ComponentFixture<ResumeKnowledgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeKnowledgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

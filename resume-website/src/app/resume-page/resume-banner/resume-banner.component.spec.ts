import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeBannerComponent } from './resume-banner.component';

describe('ResumeBannerComponent', () => {
  let component: ResumeBannerComponent;
  let fixture: ComponentFixture<ResumeBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

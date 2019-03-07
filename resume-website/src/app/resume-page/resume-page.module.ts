import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumePageRoutingModule } from './resume-page-routing.module';
import { ResumeBannerComponent } from './resume-banner/resume-banner.component';
import { ResumePageComponent } from './resume-page.component';

@NgModule({
  declarations: [ResumeBannerComponent, ResumePageComponent],
  imports: [
    CommonModule,
    ResumePageRoutingModule
  ]
})
export class ResumePageModule { }

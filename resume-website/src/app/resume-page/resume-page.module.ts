import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/presentation/material-module';

import { ResumePageRoutingModule } from './resume-page-routing.module';
import { ResumeBannerComponent } from './resume-banner/resume-banner.component';
import { ResumePageComponent } from './resume-page.component';
import { ResumeExperienceComponent } from './resume-experience/resume-experience.component';

@NgModule({
  declarations: [ResumeBannerComponent, ResumePageComponent, ResumeExperienceComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ResumePageRoutingModule
  ]
})
export class ResumePageModule { }

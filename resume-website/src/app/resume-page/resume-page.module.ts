import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/presentation/material-module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ResumePageRoutingModule } from './resume-page-routing.module';
import { ResumeBannerComponent } from './resume-banner/resume-banner.component';
import { ResumePageComponent } from './resume-page.component';
import { ResumeExperienceComponent } from './resume-experience/resume-experience.component';
import { ResumeCardComponent } from './resume-experience/resume-card/resume-card.component';

@NgModule({
  declarations: [ResumeBannerComponent, ResumePageComponent, ResumeExperienceComponent, ResumeCardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ResumePageRoutingModule
  ]
})
export class ResumePageModule { }

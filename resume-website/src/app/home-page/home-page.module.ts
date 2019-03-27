import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { HomePageComponent } from './home-page.component';
import { MaterialModule } from 'src/presentation/material-module';
import { ProfileComponent } from './profile/profile.component';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  declarations: [SlideShowComponent, HomePageComponent, ProfileComponent, ExperienceComponent],
  imports: [
    MaterialModule,
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }

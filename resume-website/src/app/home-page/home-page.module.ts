import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomePageRoutingModule } from './home-page-routing.module';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { HomePageComponent } from './home-page.component';
import { MaterialModule } from 'src/presentation/material-module';
import { ProfileComponent } from './profile/profile.component';
import { ExperienceComponent } from './experience/experience.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [SlideShowComponent, HomePageComponent, ProfileComponent, ExperienceComponent, KnowledgeComponent, ContactComponent],
  imports: [
    MaterialModule,
    CommonModule,
    FlexLayoutModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }

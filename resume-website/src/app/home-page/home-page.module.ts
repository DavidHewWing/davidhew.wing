import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { HomePageComponent } from './home-page.component';

@NgModule({
  declarations: [SlideShowComponent, HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsPageComponent } from './projects-page.component';
import { MaterialModule } from 'src/presentation/material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProjectsPageRoutingModule } from './projects-page-routing.module';

@NgModule({
  declarations: [ProjectsPageComponent],
  imports: [
    MaterialModule,
    CommonModule,
    FlexLayoutModule,
    ProjectsPageRoutingModule
  ]
})
export class ProjectsPageModule { }

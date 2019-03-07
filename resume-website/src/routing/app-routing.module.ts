import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {path: '', loadChildren: '../app/home-page/home-page.module#HomePageModule'},
    {path: 'resume', loadChildren: '../app/resume-page/resume-page.module#ResumePageModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

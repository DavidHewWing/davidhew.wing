import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {path: 'home', loadChildren: '../app/home-page/home-page.module#HomePageModule'},
    {path: 'resume', loadChildren: '../app/resume-page/resume-page.module#ResumePageModule'},
    {path: '**', loadChildren: '../app/home-page/home-page.module#HomePageModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, ViewChild, HostListener, ElementRef, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'resume-website';
  divWidth = 0;

  @ViewChild('parentDiv') parentDiv: ElementRef;
  @HostListener('window:resize') onResize() {
    if (this.parentDiv) {
      this.divWidth = this.parentDiv.nativeElement.clientWidth;
    }
  }

  constructor(@Inject(DOCUMENT) private document: any, public dialog: MatDialog) { }

  ngOnInit() {
    if (this.parentDiv) {
      this.divWidth = this.parentDiv.nativeElement.clientWidth;
    }
  }

  redirectToLinkedIn() {
    this.document.location.href = 'https://www.linkedin.com/in/david-hew-wing-8b4381152/';
  }

  redirectToGitHub() {
    this.document.location.href = 'https://github.com/DavidHewWing';
  }

  openDialog(): void {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(ContactMeComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

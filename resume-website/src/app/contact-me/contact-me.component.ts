import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ContactMeComponent>, private snackBar: MatSnackBar) {}

  onNoClick(): void {
  }

  ngOnInit() {
  }

  email() {
    this.snackBar.open('Email has also been copied to your clipboard!', 'Close', {
      duration: 10000,
      panelClass: ['snackbar-email']
    });
    location.href = 'mailto:dhew67@gmail.com';
    this.dialogRef.close();
  }

}

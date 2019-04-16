import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  mailForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<ContactMeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.mailForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(0),
      ]),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(0),
      ])
    });
  }

  onSubmit() {
    console.log(this.mailForm.value);
  }

}

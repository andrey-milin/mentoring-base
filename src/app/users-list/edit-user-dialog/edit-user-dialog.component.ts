import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ICreateEditUser, IUser } from '../user.interface';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrl: './edit-user-dialog.component.scss',
  standalone: true,
  imports: [
    MatFormField,
    MatIcon,
    ReactiveFormsModule,
    MatDialogClose,
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class EditUserDialogComponent implements OnInit {
  readonly data = inject<{ user: IUser }>(MAT_DIALOG_DATA);

  public form = new FormGroup({
    id: new FormControl(this.data.user.id),
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    address: new FormGroup({
      city: new FormControl('', [Validators.required, Validators.minLength(2)]),
    }),
    company: new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    }),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    website: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d+$/),
      Validators.minLength(7),
    ]),
  });

  ngOnInit(): void {
    this.form.patchValue(this.data.user);
  }
}

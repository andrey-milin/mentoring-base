import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { IUser } from '../user.interface';

@Component({
  selector: 'app-create-form-user',
  templateUrl: './create-user-dialog.component.html',
  styleUrl: './create-user-dialog.component.scss',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormField,
    MatLabel,
    MatInputModule,
    MatIcon,
    MatDialogClose,
  ],
})
export class CreateUserFormComponent {
  readonly data = inject<{ user: IUser }>(MAT_DIALOG_DATA);

  public form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    address: new FormGroup({
      city: new FormControl('', [Validators.required, Validators.minLength(2)]),
    }),
    company: new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    }),
    email: new FormControl('', [Validators.required, Validators.email]),
    website: new FormControl('', [Validators.required, Validators.minLength(3),]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/), Validators.minLength(7)]),
  });
}

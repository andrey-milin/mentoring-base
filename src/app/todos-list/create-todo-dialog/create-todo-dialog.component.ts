import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { Todo } from '../todo.interface';
import { MatInputModule } from '@angular/material/input';
import { MatCardActions } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-create-todo-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatIcon,
    ReactiveFormsModule,
    MatDialogClose,
    MatLabel,
    MatInputModule,
    MatFormField,
    MatCardActions,
    MatButtonModule,
  ],
  templateUrl: './create-todo-dialog.component.html',
  styleUrl: './create-todo-dialog.component.scss',
})
export class CreateTodoDialogComponent {
  readonly data = inject<{ todo: Todo }>(MAT_DIALOG_DATA);

  public formTodoDialog = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(2)]),
    userId: new FormControl('', [Validators.required, Validators.minLength(2)]),
    completed: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(3),]),
  });

  private getCompletedValue(): boolean {
    const value: string | undefined = this.formTodoDialog
      .get('completed')
      ?.value!.trim()
      .toLowerCase();
    return value === 'да' ? true : false;
  }

  get todoResult(): Todo {
    const formValue = this.formTodoDialog.value;

    return {
      id: this.data?.todo?.id || new Date().getTime(),
      title: formValue.title || '',
      completed: this.getCompletedValue(),
      userId: Number(formValue.userId),
    };
  }
}

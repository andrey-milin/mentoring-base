import { Component, inject } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardActions, MatCardModule } from "@angular/material/card";
import { MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-todo-dialog',
  standalone: true,
  imports: [MatCard, MatCardContent, MatCardActions, MatDialogClose, MatButton, MatButtonModule, MatCardModule],
  templateUrl: './delete-todo-dialog.component.html',
  styleUrl: './delete-todo-dialog.component.scss'
})
export class DeleteTodoDialogComponent {

  readonly data = inject(MAT_DIALOG_DATA)
}

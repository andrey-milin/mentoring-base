import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Todo } from '../todo.interface';
import { MatDialog } from '@angular/material/dialog';
import { DeleteTodoDialogComponent } from '../delete-todo-dialog/delete-todo-dialog.component';
import {
  MatCard,
  MatCardContent,
  MatCardActions,
  MatCardModule,
} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LimitTitlePipe } from "../../pipes/limit-title.pipe";
import { ShadowDirective } from "../../directives/shadow.directive";

@Component({
  selector: 'app-todo-card',
  standalone: true,
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
  imports: [
    MatCard,
    MatCardContent,
    MatCardActions,
    MatButtonModule,
    MatCardModule,
    LimitTitlePipe,
    ShadowDirective
],
})
export class TodoCardComponent {
  @Input()
  todo!: Todo;

  @Output()
  deleteTodo = new EventEmitter<number>();

  readonly dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);

  public openDeleteDialog() {
    const dialogRef = this.dialog.open(DeleteTodoDialogComponent, {
      data: { todoId: this.todo.id, todoTitle: this.todo.title },
    });
    dialogRef.afterClosed().subscribe((deletResult: number) => {
      if (deletResult) {
        this.deleteTodo.emit(deletResult);
        this.snackBar.open('задача успешно удалена', 'ок', {
          duration: 3000,
        });
      } else {
        this.snackBar.open('удаление отменено', 'ок', {
          duration: 3000,
        });
      }
    });
  }
}

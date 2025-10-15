import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TododsApiServise } from '../todos-api.service';
import { Todo } from './todo.interface';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodosService } from '../todos.service';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { CreateTodoDialogComponent } from './create-todo-dialog/create-todo-dialog.component';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  imports: [NgFor, TodoCardComponent, AsyncPipe, MatButton, MatIcon],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent {
  readonly todosApiServise = inject(TododsApiServise);
  readonly todosServise = inject(TodosService);
  readonly dialog = inject(MatDialog);

  constructor() {
    this.todosApiServise
      .getTodos()
      .subscribe((response: Todo[]) => this.todosServise.setTodos(response));
  }

  createTodo(formData: Todo) {
    this.todosServise.createTodo({
      id: new Date().getTime(),
      title: formData.title,
      userId: formData.userId,
      completed: formData.completed,
    });
  }

  deleteTodo(id: number) {
    this.todosServise.deleteTodo(id);
  }

  openCreateTodoDialog(): void {
    const dialogRef = this.dialog.open(CreateTodoDialogComponent);
    dialogRef.afterClosed().subscribe((createResult: Todo) => {
      if (createResult) {
        this.createTodo(createResult);
      }
    });
  }
}

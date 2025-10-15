import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from './todos-list/todo.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class TodosService {
  private snackBar = inject(MatSnackBar);
  private todosSubject$ = new BehaviorSubject<Todo[]>([]);
  todos$ = this.todosSubject$.asObservable();

  setTodos(newTodos: Todo[]) {
    this.todosSubject$.next(newTodos.slice(0, 10));
  }

  editTodo(editedTodo: Todo) {
    const updatedTodos = this.todosSubject$.value.map((todo: Todo) =>
      todo.id === editedTodo.id ? editedTodo : todo
    );
    this.todosSubject$.next(updatedTodos);
  }

  createTodo(todo: Todo) {
    const existingTodo: Todo | undefined = this.todosSubject$.value.find(
      (currentItem: Todo) => currentItem.userId === todo.userId
    );
    if (existingTodo) {
      this.snackBar.open('ТАКАЯ ЗАДАЧА УЖЕ СУЩЕСТВУЕТ', 'ок', {
        duration: 3000,
      });
    } else {
      this.todosSubject$.next([...this.todosSubject$.value, todo]);
      this.snackBar.open('ЗАДАЧА УСПЕШНО ДОБАВЛЕННА', 'ок', {
        duration: 3000,
      });
    }
  }

  deleteTodo(id: number) {
    const fiterTodos = this.todosSubject$.value.filter(
      (todo: Todo) => todo.id !== id
    );
    this.todosSubject$.next(fiterTodos);
  }
}

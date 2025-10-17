import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todo } from './todos-list/todo.interface';

@Injectable({ providedIn: 'root' })
export class TododsApiServise {
  readonly apiService = inject(HttpClient);

  getTodos() {
    return this.apiService.get<Todo[]>(
      ' https://jsonplaceholder.typicode.com/todos',
    );
  }
}

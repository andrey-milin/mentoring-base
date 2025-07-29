import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Todo } from "./todos-list/todo.interface";

@Injectable({ providedIn: 'root' })
export class TodosService {
    private todosSubject$ = new BehaviorSubject<Todo[]>([]);
    todos$ = this.todosSubject$.asObservable();

    setTodos(newTodos: Todo[]) {
        this.todosSubject$.next(newTodos);
    }

    editTodo(editedTodo: Todo) {
        const apdatedTodos = this.todosSubject$.value.map(
            (todo: Todo) => todo.id === editedTodo.id ? editedTodo : todo
        );
        this.todosSubject$.next(apdatedTodos);
    }

    createTodo(todo: Todo) {
        this.todosSubject$.next([...this.todosSubject$.value, todo]);
    }

    deleteTodo(id: number) {
        const fiterTodos = this.todosSubject$.value.filter(
            (todo: Todo) => todo.id !== id
        );
        this.todosSubject$.next(fiterTodos);
    }
}
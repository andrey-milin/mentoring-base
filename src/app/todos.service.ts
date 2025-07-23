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
        this.todosSubject$.next(this.todosSubject$.value.map(
            todo => {
                if (todo.id === editedTodo.id) {
                    return editedTodo
                } else {
                    return todo
                }
            }
        )
        )
    }

    createTodo(todo: Todo) {
        this.todosSubject$.next([...this.todosSubject$.value, todo]);
    }

    deleteTodo(id: number) {
        this.todosSubject$.next(this.todosSubject$.value.filter(
            todo => todo.id !== id
        )
        )
    }
}

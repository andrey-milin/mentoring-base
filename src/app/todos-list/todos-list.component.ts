import { NgFor } from "@angular/common";
import { Component, inject } from "@angular/core";
import { TododsApiServise } from "../todos-api.service";
import { Todo } from "./todo.interface";
import { TodoCardComponent } from "./todo-card/todo-card.component";

@Component({
    selector: 'app-todos-list',
    standalone: true,
    templateUrl: './todos-list.component.html',
    styleUrl: './todos-list.component.scss',
    imports: [NgFor, TodoCardComponent,]
})

export class TodosListComponent {
    readonly todosApiServise = inject(TododsApiServise);
    todos: Todo[] = [];

    constructor() {
        this.todosApiServise.getTodos().subscribe(
            (response: Todo[]) => this.todos = response
        )
    }

    deleteTodo(id: number) {
        this.todos = this.todos.filter(
            (todo: Todo) => todo.id !== id
        )
    }
}



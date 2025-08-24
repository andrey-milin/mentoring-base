import { AsyncPipe, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { TododsApiServise } from "../todos-api.service";
import { Todo } from "./todo.interface";
import { TodoCardComponent } from "./todo-card/todo-card.component";
import { TodosService } from "../todos.service";
import { CreateTodoFormComponent } from "../create-todo-form/create-todo-form.component";

@Component({
    selector: 'app-todos-list',
    standalone: true,
    templateUrl: './todos-list.component.html',
    styleUrl: './todos-list.component.scss',
    imports: [NgFor, TodoCardComponent, AsyncPipe, CreateTodoFormComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TodosListComponent {
    readonly todosApiServise = inject(TododsApiServise);
    readonly todosServise = inject(TodosService);

    constructor() {
        this.todosApiServise.getTodos().subscribe(
            (response: Todo[]) => this.todosServise.setTodos(response)
        )
    }

    createTodo(formData: Todo) {
        this.todosServise.createTodo({
        id: new Date().getTime(),
        title: formData.title,
        userId: formData.userId,
        completed: formData.completed,
    })
    }

    deleteTodo(id: number) {
        this.todosServise.deleteTodo(id);
    }
}



import { AsyncPipe, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { TododsApiServise } from "../todos-api.service";
import { Todo } from "./todo.interface";
import { TodoCardComponent } from "./todo-card/todo-card.component";
import { TodosService } from "../todos.service";

@Component({
    selector: 'app-todos-list',
    standalone: true,
    templateUrl: './todos-list.component.html',
    styleUrl: './todos-list.component.scss',
    imports: [NgFor, TodoCardComponent, AsyncPipe,],
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

    deleteTodo(id: number) {
        this.todosServise.deleteTodo(id);
    }
}



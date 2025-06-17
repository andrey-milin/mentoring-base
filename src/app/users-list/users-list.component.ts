import { NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { User } from "./user.interface";

@Component({
    selector: 'app-users-list',
    imports: [NgFor],
    standalone: true,
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
})

export class UsersListComponent {

    readonly apiService = inject(HttpClient);
    users: User[] = [];

    constructor() {
        this.apiService.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(
            (response) => {
                this.users = response;
            }
        )
    }
    deleteUser(id: number) {
        this.users = this.users.filter(
            user => user.id !== id
        )
    }
}

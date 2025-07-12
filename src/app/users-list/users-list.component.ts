import { NgFor } from "@angular/common";
import { Component, inject } from "@angular/core";
import { User } from "./user.interface";
import { UsersApiService } from "../users-api.service";
import { userCardComponent } from "./user-card/user-card.component";

@Component({
    selector: 'app-users-list',
    imports: [NgFor, userCardComponent],
    standalone: true,
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
})

export class UsersListComponent {

    readonly usersApiService = inject(UsersApiService);
    users: User[] = [];

    constructor() {
        this.usersApiService.getUsers().subscribe(
            (response: User[]) => this.users = response
        )
    }
    deleteUser(id: number) {
        this.users = this.users.filter(
            (user: User) => user.id !== id
        )
    }
}



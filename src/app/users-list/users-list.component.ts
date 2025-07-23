import { AsyncPipe, NgFor } from "@angular/common";
import { Component, inject } from "@angular/core";
import { User } from "./user.interface";
import { UsersApiService } from "../users-api.service";
import { userCardComponent } from "./user-card/user-card.component";
import { UsersService } from "../users.service";

@Component({
    selector: 'app-users-list',
    imports: [NgFor, userCardComponent, AsyncPipe],
    standalone: true,
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
})

export class UsersListComponent {

    readonly usersApiService = inject(UsersApiService);
    readonly usersServise = inject(UsersService);

    constructor() {
        this.usersApiService.getUsers().subscribe(
            (response: User[]) => this.usersServise.setUsers(response)
        )
    }

    deleteUser(id: number) {
        this.usersServise.deleteUser(id);
    }
}



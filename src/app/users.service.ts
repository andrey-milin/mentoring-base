import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "./users-list/user.interface";

@Injectable({ providedIn: 'root' })
export class UsersService {
    private usersSubject$ = new BehaviorSubject<User[]>([]);
    users$ = this.usersSubject$.asObservable();

    setUsers(newUsers: User[]) {
        this.usersSubject$.next(newUsers);
    }

    editUser(editedUser: User) {
        const apdatedUsers = this.usersSubject$.value.map(
            (user: User) => user.id === editedUser.id ? editedUser : user
        );
        this.usersSubject$.next(apdatedUsers);
    }

    createUser(user: User) {
        this.usersSubject$.next([...this.usersSubject$.value, user]);
    }

    deleteUser(id: number) {
        const filterUser = this.usersSubject$.value.filter(
            (user: User) => user.id !== id
        );
        this.usersSubject$.next(filterUser);
    }
}
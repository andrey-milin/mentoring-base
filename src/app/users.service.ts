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

    aditUser(aditedUser: User) {
        this.usersSubject$.next(this.usersSubject$.value.map(
            user => {
                if (user.id === aditedUser.id) {
                    return aditedUser
                } else {
                    return user
                }
            }
        )
        )
    }

    createUser(user: User) {
        this.usersSubject$.next([...this.usersSubject$.value, user]);
    }

    deleteUser(id: number) {
        this.usersSubject$.next(this.usersSubject$.value.filter(
            user => user.id !== id
        )
        )
    }
}